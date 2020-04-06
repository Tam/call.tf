import React, { useEffect, useRef, useState } from 'react';
import css from './Call.module.scss';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../_components/Button/Button';
import cls from '../_util/cls';

export default function Call () {
	const { id } = useParams()
		, [busy, setBusy] = useState(true)
		, [mute, setMute] = useState(false)
		, localVideo = useRef()
		, remoteVideo = useRef()
		, history = useHistory();

	useEffect( () => {
		if (!localVideo.current)
			return;

		const lv = localVideo.current
			, rv = remoteVideo.current;

		try {
			// TODO: RTCPeerConnection

			// Get local webcam
			navigator.mediaDevices.getUserMedia({ audio: true, video: true})
				.then(async stream => {
					await Promise.all([
						new Promise(resolve => {
							lv.srcObject = stream;
							lv.onloadedmetadata = () => {
								lv.play();
								resolve();
							};
						}),
						new Promise(resolve => {
							rv.srcObject = stream;
							rv.onloadedmetadata = () => {
								rv.play();
								resolve();
							};
						}),
					]);

					setBusy(false);
				});
		} catch (e) {
			console.error(e);
		}
	}, [localVideo]);

	return (
		<>
			<div className={cls(css.loading, { [css.hidden]: !busy })}>
				<span /> Loading
			</div>
			<div className={cls({ [css.hidden]: busy })}>
				<video
					autoPlay
					muted
					className={css.local}
					ref={localVideo}
				/>
				<video
					autoPlay
					className={css.remote}
					ref={remoteVideo}
				/>
				<footer className={css.controls}>
					<Button onClick={() => history.push('/')}>
						Hang Up
					</Button>
					<Button look="secondary" onClick={() => setMute(!mute)}>
						{mute ? 'Unmute' : 'Mute'}
					</Button>
				</footer>
			</div>
		</>
	);
}
