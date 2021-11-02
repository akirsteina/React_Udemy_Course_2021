import ExpenseItem from './ExpenseItem';
import Card from './Card';

import '../assets/Expenses.css';

function Expenses(props) {
	return (
		<Card className='expenses'>
			{props.expenses.map((expense, index) => (
				<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={index} />
			))}
		</Card>
	);
}

export default Expenses;
