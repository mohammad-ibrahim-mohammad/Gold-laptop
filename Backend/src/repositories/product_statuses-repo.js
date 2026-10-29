import pool from "../db/pool.js";

class ProductStatusRepo {
  static async find() {
    const { rows } = await pool.query(`
      SELECT *
      FROM product_statuses;
    `);

    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM product_statuses
      WHERE id = $1;
      `,
      [id],
    );

    return rows[0];
  }

  static async insert(data) {
    const { rows } = await pool.query(
      `
      INSERT INTO product_statuses (name)
      VALUES ($1)
      RETURNING *;
      `,
      [data.name],
    );

    return rows[0];
  }

  static async update(id, data) {
    const { rows } = await pool.query(
      `
      UPDATE product_statuses
      SET
        name = $1,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING *;
      `,
      [data.name, id],
    );

    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM product_statuses
      WHERE id = $1
      RETURNING *;
      `,
      [id],
    );

    return rows[0];
  }
}

export default ProductStatusRepo;
