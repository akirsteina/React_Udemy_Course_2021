import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// test suite
describe('Greeting component', () => {
	// test
	test('renders "hello world" as a text', () => {
		// Arrange
		render(<Greeting />);

		// Act
		// ...nothing

		// Assert
		const helloWorldElement = screen.getByText(/hello world/i);
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders "it is good to see you" as a text if the button was NOT clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		// ...nothing

		// Assert
		const outputElement = screen.getByText(/It is good to see you/i);
		expect(outputElement).toBeInTheDocument();
	});

	test('renders "changed" as a text if the button WAS clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		// Assert
		const outputElement = screen.getByText(/changed/i, { exact: false });
		expect(outputElement).toBeInTheDocument();
	});

	test('does NOT render "it is good to see you" as a text if the button WAS clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		// Assert
		const outputElement = screen.queryByText(/It is good to see you/i);
		expect(outputElement).toBeNull();
	});
});
