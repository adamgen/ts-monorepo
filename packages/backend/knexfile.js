// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'vista',
      user:     'vista',
      password: 'vista'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'vista',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'vista',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
