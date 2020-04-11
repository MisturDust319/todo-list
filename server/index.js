// const express = require('express');
// const path = require('path');
import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

// create server object
const app = express();

// set up directories to be used to serve static assets
// public hosts image files
app.use(express.static(path.join(__dirname, 'public')));
// build is where the built react app is served from
app.use(express.static(path.join(__dirname, 'build')));

// serve the twitter card
app.get('/app_card.jpg', (req, res) => {
	try {
		return res.sendFile(path.join(__dirname + 'public/app_card.jpg'));
	}
	catch(err) {
		console.error("Something went wrong:", err);
		return res.status(500).send('Serverside error. Please try again later.');
	}
});

// the default action is to serve the react app
app.get('/*', (req, res) => {
	try {
		const pre_rendered_app = renderToString(<App />);
		return res.send(pre_rendered_app);
	}
	catch(err) {
		console.error("Something went wrong:", err);
		return res.status(500).send('Serverside error. Please try again later.');
	}
});

// get a port from the environment
// or default to port 5000
const PORT = process.env.PORT || 5000;
// start the server on PORT
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});