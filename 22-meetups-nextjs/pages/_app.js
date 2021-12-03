import Layout from '../components/layout/Layout';
import '../styles/globals.css';

// this is a root component

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
