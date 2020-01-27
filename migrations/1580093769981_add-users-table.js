/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        user_id: {
            type: 'integer',
            primaryKey: true,
        },
        username: {
            type: 'text',
            notNull: true,
        },
        password: {
            type: 'text',
            notNull: true,
        },
        user_role_id: {
            type: 'integer',
            notNull: true,
            references: '"user_role"',
        },
        user_info_id: {
            type: 'integer',
            notNull: true,
            references: '"user_info"',
        },
    });
};

exports.down = pgm => { };
