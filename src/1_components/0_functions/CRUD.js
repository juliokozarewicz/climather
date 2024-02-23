import SQLite from 'react-native-sqlite-storage';

// config db local
// -------------------------------------------------------
const db_name = 'climather';
const table_name = 'table_cities';
const column_name_1 = 'city';
// -------------------------------------------------------

// db connection
// -------------------------------------------------------
const db = SQLite.openDatabase({ name: `${db_name}.db`, location: 'default' });
// -------------------------------------------------------

// delete all citys
// -------------------------------------------------------
export const deletAll = () => {
  db.transaction(
      (tx) => {
          tx.executeSql(
          `DELETE FROM ${table_name}`,
          );
      }
  );
};
// -------------------------------------------------------

// create database, table and column
// -------------------------------------------------------
export const openDatabaseAndCreateTable = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${table_name} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          ${column_name_1} TEXT CHECK(LENGTH(${column_name_1}) <= 250)
        )`,
      );
    }
  );
};
// -------------------------------------------------------

// read data from db
// -------------------------------------------------------
export const ReadDataBase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${table_name} ORDER BY ID DESC`,
        [],
        (tx, results) => {
          const data = [];

          for (let i = 0; i < results.rows.length; i++) {
            data.push(results.rows.item(i));
          }

          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};
// -------------------------------------------------------

// create item in db
// -------------------------------------------------------
export const CreateItemDataBase = (city) => {

    if (city.trim() === '') {
    
    } else {

        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO ${table_name} (${column_name_1}) VALUES (?)`,
                [city],
            );
        });
    };
};
// -------------------------------------------------------

// delete item db
// -------------------------------------------------------
export const deleteItemFromDatabase = (itemId) => {
  db.transaction((tx) => {
    tx.executeSql(
      `DELETE FROM ${table_name} WHERE id = ?`,
      [itemId],
    );
  });
};
// -------------------------------------------------------


