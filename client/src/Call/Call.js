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
			navigator.mediaDevices.getUserMedia({
				audio: true,
				video: {
					width: { min: 640, ideal: 1280, max: 1920 },
					height: { min: 480, ideal: 720, max: 1080 },
				},
			}).then(async stream => {
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
			}).catch(console.error);
		} catch (e) {
			console.error(e);
		}
	}, [localVideo]);

	const onHangUp = () => {
		localVideo.current.srcObject.getTracks().forEach(t => t.stop());
		remoteVideo.current.srcObject.getTracks().forEach(t => t.stop());
		history.push('/');
	};

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
				<div className={css.remote}>
					<video
						autoPlay
						ref={remoteVideo}
					/>
				</div>
				<footer className={css.controls}>
					<Button onClick={onHangUp}>
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
