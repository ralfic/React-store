import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { MyAppRouter } from './routes';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { Provider as ProviderC } from '@/components/ui/provider';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderC>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyAppRouter />
          <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </PersistGate>
      </Provider>
    </ProviderC>
  </StrictMode>
);
