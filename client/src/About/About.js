import React from 'react';
import css from './About.module.scss';
import { Link } from 'react-router-dom';

export default function About () {
	return (
		<>
			<div className={css.wrap}>
				<div className={css.text}>
					<Link to="/" className={css.back}>&larr; Back</Link>
					<p>Call.tf is an open-source peer-to-peer video calling app.</p>
					<p>We do not use cookies or collect any data.</p>
					<p><a
						href="https://github.com/tam/call.tf"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Source
					</a></p>
				</div>
			</div>
			<a
				className={css.credit}
				href="https://dribbble.com/shots/2350297-Day-007-Settings-Daily-UI"
				target="_blank"
				rel="noopener noreferrer"
			>
				UI Inspired by Willionaire on Dribbble
			</a>
		</>
	);
}
