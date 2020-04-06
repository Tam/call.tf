import React from 'react';
import css from './Index.module.scss';
import { Link } from 'react-router-dom';

export default function Index () {
	return (
		<div className={css.wrap}>
			<p>index</p>
			<p><Link to="/3h8d3h8">Join Call</Link></p>
		</div>
	);
}
