const express = require("express"); // Import the newly installed express module.
const app = express(); // Call the import (the express module seems to export a function/callable).
const port = 3000; // Assign a number to variable. This number represents the port we'll "listen" on.

// Call the "get" method of the app object and pass 2 arguments:
//    first argument is a string and represents the "path" (e.g. google.com/SOME_PATH)
//    second argument is a callback function which will be invoked (by express)
//      in which we can specify what response we want to provide when a user
//      requests that resource.
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello World" });
});

// We've set up our callback/paths/HTTP methods above, so now we can start "listening".
// If we open localhost:3000 in our browser and navigate to any of the paths registered above,
// it should trigger the respective callbacks and render whatever logic we've put in the callback
app.listen(port, () => {
  console.log(`Example app now listening at http://localhost:${port}`);
});
