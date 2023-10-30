const mongoose = require("mongoose");

const uri =
  "mongodb+srv://surajbarman989:WF74sHxDm9LBadc6@cluster0.uslk9m3.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

mongoose
  .connect(uri) //it establishes a connection to the MongoDB server and returns a promise. If connection is successful, promise
  //will resolve.If there is an error during the connection process, the promise will be rejected.
  .catch((err) => console.log("connection " + err));

const db = mongoose.connection; //mongoose.connection object serves as the interface through which you can interact with the MongoDB database connection,
// perform operations, and handle events related to the connection.

db.on(
  "error",
  console.error.bind(console, "Error connecting to MongoDB Atlas")
);

db.once("open", function () {
  console.log("{har har Mahadev} Connected to Database :: MongoDB Atlas");
});
