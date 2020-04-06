import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Call () {
	const { id } = useParams();

	return (
		<>
			<p>call {id}</p>
			<Link to="/">Leave call</Link>
		</>
	);
}
