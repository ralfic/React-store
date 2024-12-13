import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { MyAppRouter } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import { Provider as ProviderC } from '@/components/ui/provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderC>
      <Provider store={store}>
        <MyAppRouter />
      </Provider>
    </ProviderC>
  </StrictMode>
);
