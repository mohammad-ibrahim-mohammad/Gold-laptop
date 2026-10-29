import pool from "../db/pool.js";

class CategoryRepo {
  static async find() {
    const { rows } = await pool.query(`
      SELECT *
      FROM categories;
    `);

    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM categories
      WHERE id = $1;
      `,
      [id],
    );

    return rows[0];
  }

  static async insert(name, parent_id) {
    const { rows } = await pool.query(
      `
      INSERT INTO categories (
        name,
        parent_id
      )
      VALUES ($1, $2)
      RETURNING *;
      `,
      [name, parent_id],
    );

    return rows[0];
  }

  static async update(id, name, parent_id) {
    const { rows } = await pool.query(
      `
      UPDATE categories
      SET
        name = $1,
        parent_id = $2,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $3
      RETURNING *;
      `,
      [name, parent_id, id],
    );

    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM categories
      WHERE id = $1
      RETURNING *;
      `,
      [id],
    );

    return rows[0];
  }
}

export default CategoryRepo;
