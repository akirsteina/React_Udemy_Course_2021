// ourdomain.com/

import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A first meetup',
		image:
			'https://images.freeimages.com/images/large-previews/a68/quebec-city-1452671.jpg',
		address: 'Street 1, Riga, 12345',
		description: 'This is an awesome meetup',
	},
	{
		id: 'm2',
		title: 'A second meetup',
		image:
			'https://images.freeimages.com/images/large-previews/ce3/city-1570944.jpg',
		address: 'Street 2-5, Talsi, 54321',
		description: 'Another meetup',
	},
	{
		id: 'm3',
		title: 'Meetup 3',
		image:
			'https://images.freeimages.com/images/large-previews/607/city-night-1183855.jpg',
		address: 'Address 234, 0001, Jelgava',
		description: 'Yayy description',
	},
];

const HomePage = () => {
	return (
		<Layout>
			<MeetupList meetups={DUMMY_MEETUPS} />
		</Layout>
	);
};

export default HomePage;
