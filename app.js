const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use("/",require('./routes/index'))
app.use("/users",require('./routes/users'));


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
