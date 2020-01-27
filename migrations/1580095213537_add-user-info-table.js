/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('user_info', {
        user_info_id: {
            type: 'serial',
            primaryKey: true,
        },
        firstname: {
            type: 'text',
            notNull: true,
        },
        lastname: {
            type: 'text',
            notNull: true,
        },
        email: {
            type: 'text',
            notNull: true,
        },
        avatar: {
            type: 'text',
            notNull: true,
        },
        user_key: {
            type: 'text',
            notNull: true,
        },
        user_status: {
            type: 'text',
            notNull: true,
        }
    });
};

exports.down = pgm => {};
