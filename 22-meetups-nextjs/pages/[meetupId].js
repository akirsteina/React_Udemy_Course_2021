// ourdomain.com/[meetupId]
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../components/meetups/MeetupDetail';

const REACT_APP_DB_URL = process.env.REACT_APP_DB_URL;

const MeetupDetails = (props) => {
	return (
		<MeetupDetail
			image={props.meetupData.image}
			title={props.meetupData.title}
			address={props.meetupData.address}
			description={props.meetupData.description}
		/>
	);
};

export const getStaticPaths = async () => {
	const client = await MongoClient.connect(`${REACT_APP_DB_URL}`);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	// all object with no filter criteria
	// only include ids, but no other values
	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
	client.close();
	return {
		// false - paths contain all supported meetup id values
		// true - tries to create page dynamically
		// e.g. some (most visited) pages are created on build, but others - dynamically
		fallback: false,
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
		// paths: [
		// 	{
		// 		params: {
		// 			meetupId: 'm1',
		// 		},
		// 	},
		// 	{
		// 		params: {
		// 			meetupId: 'm2',
		// 		},
		// 	},
		// 	{
		// 		params: {
		// 			meetupId: 'm3',
		// 		},
		// 	},
		// ],
	};
};

export const getStaticProps = async (context) => {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(`${REACT_APP_DB_URL}`);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');

	const selectedMeetup = await meetupsCollection.findOne({
		_id: ObjectId(meetupId),
	});
	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				description: selectedMeetup.description,
				image: selectedMeetup.image,
			},
			// {
			// 	image:
			// 		'https://images.freeimages.com/images/large-previews/ce3/city-1570944.jpg',
			// 	id: meetupId,
			// 	title: 'title',
			// 	address: 'address',
			// 	description: 'description',
			// },
		},
	};
};

export default MeetupDetails;
