import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { MyAppRouter } from './routes';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { Provider as ProviderC } from '@/components/ui/provider';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderC>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyAppRouter />
        </PersistGate>
      </Provider>
    </ProviderC>
  </StrictMode>
);
