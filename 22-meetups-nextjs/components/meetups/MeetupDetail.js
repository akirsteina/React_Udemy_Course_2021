import { Fragment } from 'react';

const MeetupDetail = (props) => {
	return (
		<Fragment>
			<img
				src='https://images.freeimages.com/images/large-previews/ce3/city-1570944.jpg'
				alt='A first meetup'
			/>
			<h1>A first meetup</h1>
			<address>Some address</address>
			<p>Meetup description</p>
		</Fragment>
	);
};

export default MeetupDetail;
