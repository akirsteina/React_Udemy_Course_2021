import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import '../../assets/Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.expenses.filter(
		(expense) => {
			return expense.date.getFullYear().toString() === filteredYear;
		}
		// (expense.date.toString().indexOf(filteredYear) !== -1)
	);

	let expensesContent = <p>No expenses found</p>;
	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
		));
	}

	return (
		<Card className='expenses'>
			<ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
			{expensesContent}
		</Card>
	);
};

export default Expenses;
