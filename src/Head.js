import React from 'react';
import { Helmet } from 'react-helmet';

const title = "to-do list";

export default () => {
	return <Helmet>	 
		<title>{ title }</title>
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:creator" content="@hermetikosmedia" />
		<meta name="twitter:site" content="@hermetikosmedia" />
		<meta name="twitter:title" content={ title } />
		<meta name="twitter:description" content="A to-do list web app, built with React, Redux, Node, and SASS" />
		<meta name="twitter:image" content="https://stans-todo-list.herokuapp.com/app_card.jpg" />
	</Helmet>
}