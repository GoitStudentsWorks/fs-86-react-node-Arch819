import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/integration/react';
import {
   persistor,
  store,
} from 'store/store';
import { App } from 'components/App';
 import { Loader } from 'components/Loader';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter basename="/fs-86-react-node-Arch819">
        <App />
      </BrowserRouter>
   </PersistGate>
    </Provider>
  </React.StrictMode>
);
