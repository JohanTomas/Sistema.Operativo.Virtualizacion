var express = require("express");
var mysql = require("mysql");
var cors = require("cors");


var app = express();
app.use(express.json());
app.use(cors());


var con = mysql.createConnection({
  host: "localhost",
  user: "johan",
  password: "valerius",
  database: "sakila"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// mostrar
con.query('SELECT  * FROM actor LIMIT 100', function(error, filas){
    if(error){
         throw error;
    }else{
        filas.forEach(fila => {
           console.log(fila);
});
    }
});

// insertar
/*con.query('INSERT INTO actor (first_name, last_name, last_update) VALUES ("omar", "Rivera", "2023-11-07 12:00:00")', function(error, results){
if(error) throw error;
console.log('Registro Agregado', results)
});*/


// conexion.end();
// ACTUALIZAR
/*con.query('UPDATE actor SET first_name = "Steve", last_name = "Rogers" WHERE actor_id=6', function(error, results) {
if (error) throw error;

