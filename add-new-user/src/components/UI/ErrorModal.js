import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import styles from '../../assets/ErrorModal.module.css';
import React from 'react';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button type='button' onClick={props.onConfirm}>
					Okay
				</Button>
			</footer>
		</Card>
	);
};

const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
			{ReactDOM.createPortal(
				<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
				document.getElementById('overlay-root')
			)}
		</React.Fragment>
	);
};

export default Modal;
