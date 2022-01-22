const express=require('express');
const app=express();

const https=require('https');

app.set("view engine","ejs");
app.use(express.static("public"));

app.get('/', function(req,res) {
  const url="https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba";
  https.get(url, function(response) {
    response.on('data', function(data) {
      const apiData=JSON.parse(data);
      const array=[];
      apiData.clients.forEach(function(client) {
        array.push({name:client.name, company:client.company});
      });
      res.render("index", {Data:array});
    });
  });
});

app.listen(process.env.PORT,function() {
  console.log('server is up and running on port 3000');
});
