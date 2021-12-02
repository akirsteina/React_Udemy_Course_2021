// ourdomain.com/news

import { Fragment } from 'react';

const NewsPage = () => {
	return (
		<Fragment>
			<h1>The news page</h1>
			<ul>
				<li>
					<a href='/news/news-are-cool'>News are cool</a>
				</li>
				<li>
					<a href='/news/tuesday'>Today is Thursday</a>
				</li>
				<li>
					<a href='news/xmas'>Christmas is coming</a>
				</li>
			</ul>
		</Fragment>
	);
};

export default NewsPage;
