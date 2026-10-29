import pool from "../db/pool.js";

class TagRepo {
  static async find() {
    const { rows } = await pool.query(`
      SELECT *
      FROM tags;
    `);

    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM tags
      WHERE id = $1;
      `,
      [id],
    );

    return rows[0];
  }

  static async insert(name) {
    const { rows } = await pool.query(
      `
      INSERT INTO tags (name)
      VALUES ($1)
      RETURNING *;
      `,
      [name],
    );

    return rows[0];
  }

  static async update(id, name) {
    const { rows } = await pool.query(
      `
      UPDATE tags
      SET
        name = $1,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING *;
      `,
      [name, id],
    );

    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM tags
      WHERE id = $1
      RETURNING *;
      `,
      [id],
    );

    return rows[0];
  }
}

export default TagRepo;
