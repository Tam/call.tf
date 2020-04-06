import React, { useEffect, useRef } from 'react';
import css from './Call.module.scss';
import { useParams } from 'react-router-dom';

export default function Call () {
	const { id } = useParams()
		, localVideo = useRef()
		, remoteVideo = useRef();

	useEffect( () => {
		if (!localVideo.current)
			return;

		const lv = localVideo.current
			, rv = remoteVideo.current;

		try {
			// TODO: RTCPeerConnection

			// Get local webcam
			navigator.mediaDevices.getUserMedia({ audio: true, video: true}).then(stream => {
				lv.srcObject = stream;
				lv.onloadedmetadata = () => lv.play();

				rv.srcObject = stream;
				rv.onloadedmetadata = () => rv.play();
			});
		} catch (e) {
			console.error(e);
		}
	}, [localVideo]);

	return (
		<>
			<video
				autoPlay
				muted
				className={css.local}
				ref={localVideo}
			/>
			<div className={css.wrap}>
				<video
					autoPlay
					className={css.remote}
					ref={remoteVideo}
				/>
			</div>
		</>
	);
}
