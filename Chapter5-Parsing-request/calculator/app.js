/*Create a calculator
1. Create a new node.js project named "Calculator".
2.On the home page (route "/") show a welcome msg and link to calculator page
3.on the "/calculator" page , display a form with two input fields and a sum button
4.when a user clicks the sum button they should be taken to the "/calculate-result" page
  which shows the sum of two number
    - make sure the request goes to server
    - create a separate module for the adition function
    - create another module to handle incoming request
    - on the "/calculate-result" page parse the user input use the addition module to calculate 
      the sum and display the result on new HTML page
*/

const http = require('http');
const { requestHandler } = require('./handler');

const server = http.createServer(requestHandler);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});