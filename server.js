const express = require("express");
const htmlRoutes = require("./routes/html_route");
const apiRoutes = require("./routes/api_route");

const app = express();
// Define a port to listen for incoming requests
const PORT = process.env.PORT || 3000;

// use express. json() , 
//itis a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express.json());
// use express. urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: true }));
// we use expres.static in oder  To serve static files such as images, CSS files, and JavaScript files
app.use(express.static("public"));
// we use API routes  built already
app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

// Start our server so that it can begin listening to client requests.

app.listen(PORT,()=> console.log(`Listening on PORT : ${PORT}`));