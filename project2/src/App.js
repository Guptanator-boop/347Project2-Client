import logo from './logo.svg';
import './App.css';
import {Memory} from './Memory'

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

let credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
let connection = mysql.createConnection(credentials);
connection.connect();

function rowToObject(row) {
  return {
    username: row.username,
    movie_name: row.movie_name,
    rating: row.rating,
    message: row.message,
  }
}

app.get('/reviews/:movie_name', (request, response) => {
  const query = 'SELECT username, movie_name, rating, message FROM review ORDER BY updated_at DESC';
  const params = [request.params.movie_name];
  connection.query(query, params, (error, rows) => {
    response.send({
      ok: true,
      reviews: rows.map(rowToObject),
    });
  });
});

app.post('/reviews', (request, response) => {
  const query = 'INSERT INTO review(username, movie_name, rating, message)  FROM review ORDER BY updated_at DESC';
  const params = [request.params.movie_name];
  connection.query(query, params, (error, rows) => {
    response.send({
      ok: true,
      reviews: rows.map(rowToObject),
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
