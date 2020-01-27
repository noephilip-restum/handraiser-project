/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('user_role', {
        user_role_id: {
            type: 'serial',
            primaryKey: true,
        },
        user_role: {
            type: 'text',
            notNull: true,
        },
    });
};

exports.down = pgm => {};
