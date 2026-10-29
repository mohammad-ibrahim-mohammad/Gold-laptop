import pool from "../db/pool.js";

class ProductCategoriesRepo {
  static async find() {
    const { rows } = await pool.query(`
      SELECT *
      FROM product_categories;
    `);

    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM product_categories
      WHERE id = $1;
      `,
      [id],
    );

    return rows[0];
  }

  static async insert(user_id, product_id, rating, comment) {
    const { rows } = await pool.query(
      `
      INSERT INTO product_categories (
        product_id, category_id
      )
      VALUES ($1, $2)
      RETURNING *;
      `,
      [product_id, category_id],
    );

    return rows[0];
  }

  static async update(id, product_id, category_id) {
    const { rows } = await pool.query(
      `
      UPDATE product_categories
      SET
        product_id = $1,
        category_id = $2,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $3
      RETURNING *;
      `,
      [product_id, category_id, id],
    );

    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM product_categories
      WHERE id = $1
      RETURNING *;
      `,
      [id],
    );

    return rows[0];
  }
}

export default ProductCategoriesRepo;
