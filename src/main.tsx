import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider as JotaiProvider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </JotaiProvider>
  </StrictMode>,
);
