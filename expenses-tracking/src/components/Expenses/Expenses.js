import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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

	return (
		<Card className='expenses'>
			<ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
