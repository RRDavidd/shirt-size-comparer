import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './output.css';
import { Provider as ReduxProvider} from 'react-redux';
import store from './store/states';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
