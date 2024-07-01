import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PatientWaitInfo from './components/PatientWaitInfo';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto px-4">
        <PatientWaitInfo />
      </div>
    </QueryClientProvider>
  );
};

export default App;