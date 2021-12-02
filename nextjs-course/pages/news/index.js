// ourdomain.com/news

import { Fragment } from 'react';
import Link from 'next/link';

const NewsPage = () => {
	return (
		<Fragment>
			<h1>The news page</h1>
			<ul>
				<li>
					<Link href='/news/news-are-cool'>News are cool</Link>
				</li>
				<li>
					<Link href='/news/tuesday'>Today is Thursday</Link>
				</li>
				<li>
					<Link href='news/xmas'>Christmas is coming</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default NewsPage;
