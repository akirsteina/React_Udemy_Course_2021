// ourdomain.com/

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [];

const HomePage = () => {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
