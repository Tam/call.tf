import React, { useState } from 'react';
import css from './Index.module.scss';
import Button from '../_components/Button/Button';
import Input from '../_components/Input/Input';
import Form from '../_components/Form';
import cls from '../_util/cls';

export default function Index () {
	const [tab, setTab] = useState('join');

	const onJoinSubmit = data => {
		console.log(data);
	};

	const onCreateSubmit = data => {
		console.log(data);
	};

	return (
		<div className={css.wrap}>
			<div className={css.tabs}>
				<button
					className={cls({ [css.active]: tab === 'join' })}
					onClick={() => setTab('join')}
				>
					Join
				</button>
				<button
					className={cls({ [css.active]: tab === 'create' })}
					onClick={() => setTab('create')}
				>
					Create
				</button>
			</div>

			{tab === 'join' && (
				<Form onSubmit={onJoinSubmit} className={css.form}>
					<Input
						label="Code"
						name="code"
						required
					/>
					<Input
						label="Password"
						type="password"
						name="password"
					/>

					<Button type="submit">Join</Button>
				</Form>
			)}
			{tab === 'create' && (
				<Form onSubmit={onCreateSubmit} className={css.form}>
					<Input
						label="Password"
						type="password"
						name="password"
					/>

					<Button type="submit">Create</Button>
				</Form>
			)}
		</div>
	);
}
