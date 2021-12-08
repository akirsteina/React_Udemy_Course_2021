// ourdomain.com/

// if imported package is used only in getstaticprops or getserversideprops, it is not rendered in client side bundle
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const REACT_APP_DB_URL = process.env.REACT_APP_DB_URL;

// const DUMMY_MEETUPS = [
// 	{
// 		id: 'm1',
// 		title: 'A first meetup',
// 		image:
// 			'https://images.freeimages.com/images/large-previews/a68/quebec-city-1452671.jpg',
// 		address: 'Street 1, Riga, 12345',
// 		description: 'This is an awesome meetup',
// 	},
// 	{
// 		id: 'm2',
// 		title: 'A second meetup',
// 		image:
// 			'https://images.freeimages.com/images/large-previews/ce3/city-1570944.jpg',
// 		address: 'Street 2-5, Talsi, 54321',
// 		description: 'Another meetup',
// 	},
// 	{
// 		id: 'm3',
// 		title: 'Meetup 3',
// 		image:
// 			'https://images.freeimages.com/images/large-previews/607/city-night-1183855.jpg',
// 		address: 'Address 234, 0001, Jelgava',
// 		description: 'Yayy description',
// 	},
// ];

const HomePage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>Meetups</title>
				<meta
					name='description'
					content='Browse a list of highly active React meetups'
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	);
};

// only works in page components
// has to be called getStaticProps
// load data before the component function is executed
// this code is not executed on client side and is only executed during the build
export const getStaticProps = async () => {
	// fetch data
	const client = await MongoClient.connect(`${REACT_APP_DB_URL}`);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	// by default returns all deocuments
	// an async task that returns a promise
	const meetups = await meetupsCollection.find().toArray();
	client.close();

	// always need to return object
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
};

// does not run during build, but always on the server after the deployment
// never runs in the client, only on server (can also use credentials)
// runs for every incoming request
// export const getServerSideProps = async (context) => {
// 	const req = context.req;
// 	const res = context.res;
// 	// fetch data from API
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// };

export default HomePage;
