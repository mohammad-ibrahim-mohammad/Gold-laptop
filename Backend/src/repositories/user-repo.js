import pool from "../db/pool.js";

class UserRepo {
  static async find() {
    const { rows } = await pool.query(`SELECT * FROM users;`);

    return rows;
  }
  static async findById(id) {
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1;`, [
      id,
    ]);
    return rows[0];
  }
  static async insert(name, email, phone, password, passwordConfirm, avatar) {
    const { rows } = await pool.query(
      `INSERT INTO users (name, email, phone, password, passwordConfirm, avatar)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [name, email, phone, password, passwordConfirm, avatar],
    );

    return rows[0];
  }

  static async update(
    id,
    name,
    email,
    phone,
    password,
    passwordConfirm,
    avatar,
    active,
  ) {
    const { rows } = await pool.query(
      `
      UPDATE users 
      SET name = $1,
      email = $2,
      phone = $3,
      avatar = $4,
      active = $5,
      updated_at = CURRENT_TIMESTAMP
      WHERE id = $6 RETURNING *;`,
      [name, email, phone, avatar, active, id],
    );

    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM users WHERE id = $1 RETURNING *;`,
      [id],
    );

    return rows[0];
  }
}

export default UserRepo;
