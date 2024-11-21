import express from 'express';


//Initialize app variable with Express
const app = express();


app.get("/", (req, res) => {
    res.send(`<h1>Hello Ashley</h1>`);
  });
  

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });