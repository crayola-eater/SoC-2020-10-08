const express = require("express");

const {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} = require("./models/astronauts");

const app = express();
app.use(express.json());
app.use(express.query());

/* Tasks

You have been asked to write the request handlers which manage the coordination of astronauts in outer space. All of the models that
retrieve and manage astronaut data have been written for you, and have been imported above. You must adhere to the principles of
RESTful API design throughout the tasks. Enter 'npm run dev' in your console to start the server. Test your request handlers using 
Postman.

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

Task 1

Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */

// Task 7

/* Modify your program to handle `GET` requests is received to `/astronauts?name=<name>`. Rather than writing a new request handler,
 you will need to add the functionality to your existing GET request handler. */
app.get("/astronauts", async (req, res) => {
  // Seems like we shouldn't return an error if the search
  // (for a particular name) returns an empty array.
  // https://softwareengineering.stackexchange.com/q/358243
  const astronauts = req.query.name
    ? await getAstronautsByName(req.query.name)
    : await getAstronauts();

  res.json({
    success: true,
    payload: astronauts,
  });
});

// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */
app.post("/astronauts", async (req, res) => {
  const astronaut = await createAstronaut(req.body);
  res.json({
    success: true,
    payload: astronaut,
  });
});

// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */
app.get("/astronauts/:id(\\d+)", async (req, res) => {
  try {
    res.json({
      success: true,
      payload: await getAstronautById(req.params.id),
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      payload: err.message,
    });
  }
});

// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */
app.put("/astronauts/:id(\\d+)", async (req, res) => {
  const updatedAstronaut = await replaceAstronautById(req.params.id, req.body);
  res.json({
    success: true,
    payload: updatedAstronaut,
  });
});

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */
app.delete("/astronauts/:id(\\d+)", async (req, res) => {
  const astronauts = await deleteAstronautById(req.params.id);
  res.json({
    success: true,
    payload: astronauts,
  });
});

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */
app.patch("/astronauts/:id(\\d+)", async (req, res) => {
  const updatedAstronaut = await updateAstronautById(req.params.id, req.body);
  res.json({
    success: true,
    payload: updatedAstronaut,
  });
});

// Task 8

/* Modify your program to handle incorrect requests, and return the appropriate response codes and pattern. */

module.exports = app;
