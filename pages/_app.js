import { SSRProvider } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import NavigationBar from '../components/Navigation/NavigationBar';
import { store } from '../DataManagement/store';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}> 
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </Provider>
  )
}

export default MyApp
