import React from 'react';
import css from './Input.module.scss';

export default function Input ({
	label,
	name,
	type = 'text',
	required = false,
}) {
	return (
		<label className={css.label}>
			<span className={css.name}>
				{label}
			</span>
			<input
				type={type}
				required={required}
				className={css.input}
				name={name}
			/>
		</label>
	);
}
