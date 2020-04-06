import React from 'react';
import css from './Button.module.scss';
import cls from '../../_util/cls';

export default function Button ({
	type = 'button',
	look = 'primary',
	children,
	...props
}) {
	return (
		<button
			type={type}
			className={cls(css.button, css[look])}
			{...props}
		>
			{children}
		</button>
	);
}
