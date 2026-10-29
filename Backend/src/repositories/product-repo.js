import pool from "../db/pool.js";

class ProductRepo {
  static async find(sortBy, direction, limit, categories, brands) {
    const fields = sortBy.split(",").map((field) => field.trim());

    const { rows: tableRows } = await pool.query(`
    SELECT column_name
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'products';
  `);

    const allowedFields = new Set(
      tableRows.map((column) => column.column_name),
    );

    for (const field of fields) {
      if (!allowedFields.has(field)) {
        throw new Error(`Invalid sort field: ${field}`);
      }
    }

    const conditions = [];
    const values = [limit];

    if (categories.length > 0) {
      values.push(categories);
      conditions.push(`c.name = ANY($${values.length})`);
    }

    if (brands.length > 0) {
      values.push(brands);
      conditions.push(`b.name = ANY($${values.length})`);
    }

    const filters = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : "";

    const { rows } = await pool.query(
      `
    SELECT DISTINCT p.*
    FROM products AS p
    JOIN product_categories AS pc
      ON p.id = pc.product_id
    JOIN categories AS c
      ON c.id = pc.category_id
    JOIN brands AS b
      ON b.id = p.brand_id
    ${filters}
    ORDER BY ${fields.map((field) => `p.${field}`).join(", ")} ${direction}
    LIMIT $1;
    `,
      values,
    );

    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM products
      WHERE id = $1;
      `,
      [id],
    );

    return rows[0];
  }

  static async insert(
    sku,
    name,
    description,
    product_status_id,
    regular_price,
    discount_price,
    quantity,
    taxable,
  ) {
    const { rows } = await pool.query(
      `
      INSERT INTO products (
        sku,
        name,
        description,
        product_status_id,
        regular_price,
        discount_price,
        quantity,
        taxable
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
      `,
      [
        sku,
        name,
        description,
        product_status_id,
        regular_price,
        discount_price,
        quantity,
        taxable,
      ],
    );

    return rows[0];
  }

  static async update(
    id,
    sku,
    name,
    description,
    product_status_id,
    regular_price,
    discount_price,
    quantity,
    taxable,
    images,
  ) {
    const { rows } = await pool.query(
      `
      UPDATE products
      SET
        sku = $1,
        name = $2,
        description = $3,
        product_status_id = $4,
        regular_price = $5,
        discount_price = $6,
        quantity = $7,
        taxable = $8,
        images = $9,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $10
      RETURNING *;
      `,
      [
        sku,
        name,
        description,
        product_status_id,
        regular_price,
        discount_price,
        quantity,
        taxable,
        images,
        id,
      ],
    );

    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM products
      WHERE id = $1
      RETURNING *;
      `,
      [id],
    );

    return rows[0];
  }

  static async findByCategory(categoryId) {
    const { rows } = await pool.query(
      `
    SELECT *
    FROM products
    WHERE category_id = $1;
    `,
      [categoryId],
    );

    return rows;
  }
}

export default ProductRepo;
