import pool from "../db/pool.js";

class ReviewRepo {
  static async find() {
    const { rows } = await pool.query(`
      SELECT *
      FROM reviews;
    `);

    return rows;
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM reviews
      WHERE id = $1;
      `,
      [id],
    );

    return rows[0];
  }

  static async insert(user_id, product_id, rating, comment) {
    const { rows } = await pool.query(
      `
      INSERT INTO reviews (
        user_id, product_id, rating, comment
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `,
      [user_id, product_id, rating, comment],
    );

    return rows[0];
  }

  static async update(id, user_id, product_id, rating, comment) {
    const { rows } = await pool.query(
      `
      UPDATE reviews
      SET
        user_id = $1,
        product_id = $2,
        rating = $3,
        comment = $4,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $5
      RETURNING *;
      `,
      [user_id, product_id, rating, comment, id],
    );

    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM reviews
      WHERE id = $1
      RETURNING *;
      `,
      [id],
    );

    return rows[0];
  }
}

export default ReviewRepo;
