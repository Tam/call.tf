import React from 'react';
import css from './About.module.scss';
import { Link } from 'react-router-dom';

export default function About () {
	return (
		<div className={css.wrap}>
			<div className={css.text}>
				<Link to="/" className={css.back}>&larr; Back</Link>
				<p>Call.tf is an open-source peer-to-peer video calling app.</p>
				<p>
					We do not collect any data. <a
						href="https://github.com/tam/call.tf"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Source
					</a>.
				</p>
			</div>
		</div>
	);
}
