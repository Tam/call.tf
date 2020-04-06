import React from 'react';
import set from 'lodash.set';

function deepen (o) {
	const oo = {};
	for (let k in o) if (o.hasOwnProperty(k)) {
		set(oo, k, o[k]);
	}
	return oo;
}

export default function Form ({ onSubmit, children, ...props }) {
	return (
		<form {...props} onSubmit={e => {
			e.preventDefault();

			const data = {};

			(new FormData(e.target)).forEach((value, key) => {
				const isList = key.endsWith('[]');
				key = key.replace(/\[]$/g, '');

				if (!Reflect.has(data, key) || !isList) {
					data[key] = isList ? [value] : value;
					return;
				}

				if (!Array.isArray(data[key]))
					data[key] = [data[key]];

				data[key].push(value);
			});

			onSubmit(deepen(data));
		}}>
			{children}
		</form>
	);
}
