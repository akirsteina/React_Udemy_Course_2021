// server side code
// never on client - can use credentials
// /api/new-meetup

import { MongoClient } from 'mongodb';

// only post requests
const handler = async (req, res) => {
	if (req.method === 'POST') {
		const data = req.body;

		// this is a code you never want to run on client side
		// but this is a secure place
		const client = await MongoClient.connect(
			'mongodb+srv://akirsteina:N7v4iPX1ngw5EfcG@cluster0.arehk.mongodb.net/meetups?retryWrites=true&w=majority'
		);

		const db = client.db();

		const meetupsCollection = db.collection('');

		// insert one new document in to the collection
		// document == object
		const result = await meetupsCollection.insertOne(data);
		// result - an object with automatically generated id

		console.log(result);

		// closes db connection once we are done
		client.close();

		res.status(201).json({ message: 'Meetup inserted!' });
	}
};

export default handler;
