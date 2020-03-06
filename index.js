const express = require('express');
const path = require('path');

// create server object
app = express();

// serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// serve the React app index file
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + 'build/index.html'));
});

// get a port from the environment
// or default to port 5000
const PORT = process.env.PORT || 5000;
// start the server on PORT
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});