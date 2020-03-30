const express = require('express');
const path = require('path');

// create server object
app = express();

// set up static directories
// public hosts image files
app.use(express.static(path.join(__dirname, 'public')));
// build is where the built react app is served from
app.use(express.static(path.join(__dirname, 'build')));

// serve the twitter card
app.get('/app_card.jpg', (req, res) => {
	res.sendFile(path.join(__dirname + 'public/app_card.jpg'));
});

// the default action is to serve the react app
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