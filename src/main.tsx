//* --- REACT
import ReactDOM from 'react-dom/client';

//* --- REDUX
import { Provider } from 'react-redux';

//* --- COMPONENTS
import App from './components/App/App';

//* --- STORE
import store from './store/store';

//* --- SCSS
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
