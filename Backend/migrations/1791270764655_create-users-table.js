/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.sql(`
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        phone VARCHAR(20),
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        passwordConfirm VARCHAR(255) NOT NULL,
        changedPasswordAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        passwordResetToken VARCHAR(240),
        passwordResetTokenExpires TIMESTAMP WITH TIME ZONE,
        active BOOLEAN DEFAULT true,
        avatar VARCHAR(140),
        name VARCHAR(100) NOT NULL,
        CONSTRAINT password_length
          CHECK (length (password) >= 8),
        CONSTRAINT passwords_match 
          CHECK (password = passwordConfirm)
        );`);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.sql(`
        DROP TABLE users;
        `);
};
