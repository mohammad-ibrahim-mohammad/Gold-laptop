import pool from "../db/pool.js";

class ProductTagsRepo {
  static async find() {
    const { rows } = await pool.query(`
        SELECT * FROM product_tags;
        `);
    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM product_tags 
        WHERE id = $1 
        limit 1;`,
      [id],
    );

    return rows[0];
  }
  static async insert(name) {
    const { rows } = await pool.query(
      `
        INSERT INTO product_tags (name)
        VALUES ($1) RETURNING *`,
      [name],
    );

    return rows[0];
  }

  static async update(id, name) {
    const { rows } = await pool.query(
      `
        UPDATE product_tags
        SET name = $1
        WHERE id = $2,
        updated_at = CURRENT_TIMESTAMP
        RETURNING *;`,
      [name, id],
    );

    return rows[0];
  }

  static async delete() {
    const { rows } = await pool.query(
      `
        DELETE FROM product_tags
        WHERE id = $1 RETURNING *;
        `,
      [id],
    );
    return rows[0];
  }
}

export default ProductTagsRepo;
