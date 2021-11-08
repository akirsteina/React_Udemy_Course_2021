import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import Card from './Card';
import styles from '../../assets/Modal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal} onClick={props.onConfirm}>
			{props.children}
		</Card>
	);
};

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
			{ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm}>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))}
		</Fragment>
	);
};

export default Modal;
