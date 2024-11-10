"use client"; 

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface LayoutProps {
  children: ReactNode; // טייפ של פרופס של הילדים
}

const Layout = ({ children }: LayoutProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} /> {/* הוספת DevTools */}
    </QueryClientProvider>
  );
};

export default Layout;
