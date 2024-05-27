const mongoose = require('mongoose');
 
// Указываем, где запущена база данных
// mongodb://localhost:27017 — адрес сервера MongoDB
// pindie — имя базы данных на сервере MongoDB
const DB_URL = 'mongodb://localhost:27017/pindie';

async function connectToDatabase() {
  try {
      // Подключение к БД
    await mongoose.connect(DB_URL);
    console.log('Successful connect to MongoDB')
  }
  catch (err) {
      // Обработка ошибки при подключении к базе
    console.log('Error connecting to MongoDB')
    console.error(err);
  }

  await mongoose.connect(DB_URL);
}

module.exports = connectToDatabase;