// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './recipesDB.sqlite3'
    },
    useNullAsDefault: true
  }

};
