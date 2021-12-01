// ourdomain.com/news/[dynamic-pathname]

import { useRouter } from 'next/router';

const DetailPage = () => {
	const router = useRouter();

	const newsID = router.query.newsId;
	// send a request to the backend API
	// to fetch the news item with newsId

	return <h1>The Detail page</h1>;
};

export default DetailPage;
