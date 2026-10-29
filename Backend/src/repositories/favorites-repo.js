import pool from "../db/pool.js";

class FavoritesRepo {
  static async find() {
    const { rows } = await pool.query(`
      SELECT *
      FROM favorites;
    `);

    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM favorites
      WHERE id = $1;
      `,
      [id],
    );

    return rows[0];
  }

  static async insert(user_id, product_id) {
    const { rows } = await pool.query(
      `
      INSERT INTO favorites (
        user_id, product_id
      )
      VALUES ($1, $2)
      RETURNING *;
      `,
      [user_id, product_id],
    );

    return rows[0];
  }

  static async update(id, user_id, product_id) {
    const { rows } = await pool.query(
      `
      UPDATE favorites
      SET
        user_id = $1,
        product_id = $2,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $3
      RETURNING *;
      `,
      [user_id, product_id, id],
    );

    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM favorites
      WHERE id = $1
      RETURNING *;
      `,
      [id],
    );

    return rows[0];
  }
}

export default FavoritesRepo;
