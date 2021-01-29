var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb
const uri = "mongodb+srv://fmalizia:Polpette@cluster0.r9wn4.mongodb.net/Cluster0?retryWrites=true&w=majority";


router.get('/', function (req, res, next) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(get10Movies);

  function get10Movies(err) {
      if (err) Console.log("Connsessione al db non riuscita");
      else {
          const collection = client.db("WORLD_DATA_BANK").collection("access_to_electricity"); //Mi connetto alla collection movies
          collection.find({"Country Code" : "ARM"})/*.project({2001:1 })*/.limit(10).toArray(callBackQuery); //Eseguo la query e passo una funzione di callback per gestire il risultato
      }
  }
  function callBackQuery (err, result) {
      if (err) console.log(err.message); //Se c'è qualche errore lo stampo
      else res.send(result);
      client.close(); //Quando ho terminato la find chiudo la sessione con il db
  }
});

module.exports = router;
