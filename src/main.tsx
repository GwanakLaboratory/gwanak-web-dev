import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider as JotaiProvider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { jotaiStore } from './store/auth.ts';
import InitPlugin from './InitPlugin.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JotaiProvider store={jotaiStore}>
      <QueryClientProvider client={queryClient}>
        <InitPlugin>
          <App />
        </InitPlugin>
      </QueryClientProvider>
    </JotaiProvider>
  </StrictMode>,
);
