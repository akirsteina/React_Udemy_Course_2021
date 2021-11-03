import ExpenseForm from './ExpenseForm';
import '../../assets/NewExpense.css';

const NewExpense = (props) => {
	const onSaveExpenseDateHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData); //lifting data up
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={onSaveExpenseDateHandler} />
		</div>
	);
};

export default NewExpense;
