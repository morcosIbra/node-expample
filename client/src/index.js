import React from 'react';
import ReactDOM from 'react-dom';
// import './utilies/dateFormat';
import App from './Pages/App';
import * as serviceWorker from './serviceWorker';
import './styling/index.scss';
import { Provider } from 'react-redux';
import store from './store';
import 'moment/locale/ar';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
