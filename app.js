const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
mongoose.connect("mongodb+srv://tianna:test1@cluster0.rjlja.mongodb.net/test");
mongoose.connection.once("open", () => {
  console.log("connected to database");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("Listening on port 4000...");
});
