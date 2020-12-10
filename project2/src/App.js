import React from 'react';
import './App.css';
import {Review} from './Review'

//Define constants
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');

//Set up core and express
const app = express();
app.use(cors());
app.use(express.json());

//Get credentials to access database
let credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
let connection = mysql.createConnection(credentials);
connection.connect();

//Function to convert row to object
function rowToObject(row) {
  return {
    username: row.username,
    movie_name: row.movie_name,
    rating: row.rating,
    message: row.message,
  }
}

//Get from database
app.get('/reviews/:movie_name', (request, response) => {
  const query = 'SELECT username, movie_name, rating, message FROM review ORDER BY created_at DESC';
  const params = [request.params.movie_name];
  connection.query(query, params, (error, rows) => {
    response.send({
      ok: true,
      reviews: rows.map(rowToObject),
    });
  });
});

//Add to database
app.post('/reviews', (request, response) => {
  const query = 'INSERT INTO review(username, movie_name, rating, message) VALUES (?, ?, ?, ?)';
  const params = [request.body.username, request.body.movie_name, request.body.rating, request.body.message];
  connection.query(query, params, (error, result) => {
    response.send({
      ok: true,
      id: result.insertID,
    });
  });
});

//Update database entry
app.patch('/reviews:id', (request, response) => {
  const query = 'UPDATE review SET message = ?, rating = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
  const params = [request.body.username, request.body.movie_name, request.body.rating, request.body.message, request.params.id];
  connection.query(query, params, (error, result) => {
    response.send({
      ok: true,
    });
  });
});

//Remove database entry
app.delete('/reviews:id', (request, response) => {
  const query = 'UPDATE review SET movie_name = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
  const params = [request.body.username, request.body.movie_name, request.body.rating, request.body.message, request.params.id];
  connection.query(query, params, (error, result) => {
    response.send({
      ok: true,
    });
  });
});

const port = 443;
app.listen(port, () => {
  console.log(`We live on port ${port}!`);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
