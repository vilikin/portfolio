const express = require("express"),
      app = express();

app.use(express.static("./build"));

app.listen(80, function() {
    console.log("HTTP Server is listening to port " + 80);
});
