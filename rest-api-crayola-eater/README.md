# RESTful API Workshop

You have been asked to write the request handlers which manage the coordination of astronauts in outer space. All of the models that
retrieve and manage astronaut data have been written for you, and have been imported into app.js. You must adhere to the principles of
RESTful API design throughout the tasks. Enter 'npm run dev' in your console to start the server. Test your request handlers using
Postman. Write all of your request handlers in app.js.

All json responses for this tasks should follow the pattern:

res.json({
"success": boolean,
"payload": returnedData
})

## Task 1 - GET Request

Write a request handler to return the correct response when a `GET` request is received to `/astronauts`.
Choose the appropriate function from the imported functions at the top of the `app.js` to get your data.

## Task 2 - POST request

Write a request handler to return the correct response and perform the correct action when a `POST` request is received to `/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action.

## Task 3 - GET astronaut by ID

Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the appropriate path.

## Task 4 - PUT astronaut by ID

Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler listen to requests at the appropriate path.

## Task 5 - DELETE astronaut by ID

Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler listen to requests at the appropriate path.

## Task 6 PATCH astronaut by ID

Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler listen to requests at the appropriate path.

## Task 7 GET astronaut by name

Modify your program to handle `GET` requests is received to `/astronauts?name=<name>`. Rather than writing a new request handler, you will need to add the functionality to your existing GET request handler.

## Task 8 Error Handling

Modify your program to handle incorrect requests, and return the appropriate response codes and pattern.
