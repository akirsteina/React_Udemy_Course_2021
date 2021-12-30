import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
	test('renders posts if request succeeds', async () => {
		// overwriting the built in fetch with out dummy fetch
		// not sending actual requests
		window.fetch = jest.fn();
		// set the actual value this promise should return
		window.fetch.mockResolvedValueOnce({
			json: async () => [{ id: 'p1', title: 'first post' }],
		});
		render(<Async />);

		// getAllByRole instantly searches (as wel as query)
		// findAllByRole - async
		const listItemElems = await screen.findAllByRole('listitem', {}, {});
		expect(listItemElems).not.toHaveLength(0);
	});
});
