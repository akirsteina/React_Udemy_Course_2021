// ourdomain.com/[meetupId]

import MeetupDetail from '../components/meetups/MeetupDetail';

const MeetupDetails = () => {
	return (
		<MeetupDetail
			image='https://images.freeimages.com/images/large-previews/ce3/city-1570944.jpg'
			id='m1'
			title='title'
			address='address'
			description='description'
		/>
	);
};

export const getStaticPaths = async () => {
	return {
		// false - paths contain all supported meetup id values
		// true - tries to create page dynamically
		// e.g. some (most visited) pages are created on build, but others - dynamically
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
			{
				params: {
					meetupId: 'm3',
				},
			},
		],
	};
};

export const getStaticProps = async (context) => {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;

	console.log(meetupId);

	return {
		props: {
			meetupData: {
				image:
					'https://images.freeimages.com/images/large-previews/ce3/city-1570944.jpg',
				id: meetupId,
				title: 'title',
				address: 'address',
				description: 'description',
			},
		},
	};
};

export default MeetupDetails;
