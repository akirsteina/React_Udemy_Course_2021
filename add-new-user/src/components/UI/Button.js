import styles from '../../assets/Button.module.css';

const Button = (props) => {
	return (
		<button className={styles.button} type={props.type}>
			{props.title}
		</button>
	);
};

export default Button;
