import ExpenseItem from "./ExpenseItem";
import "../assets/Expenses.css";

function Expenses(props) {
	return (
		<div className="expenses">
			{props.expenses.map((expense, index) => (
				<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={index} />
			))}
		</div>
	);
}

export default Expenses;
