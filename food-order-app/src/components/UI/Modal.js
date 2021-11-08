import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import Card from './Card';
import styles from '../../assets/Modal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
	return <Card className={styles.modal}>{props.children}</Card>;
};

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onHideCart={props.onClose} />, document.getElementById('backdrop-root'))}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))}
		</Fragment>
	);
};

export default Modal;
