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

	return (
		<Card className='expenses'>
			<ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />

			{props.expenses.map((expense, index) => (
				<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={index} />
			))}
		</Card>
	);
};

export default Expenses;
