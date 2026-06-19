const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
  console.log("This is middleware")
  next();
})


app.get("/about", function(req,res,next){
  return next(new Error("Done"));
  //res.send("Champion second");
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(5000);