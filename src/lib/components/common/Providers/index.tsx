"use client";

import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { queryClient } from "src/services/queryClient";
import { toastOptions } from "src/services/toastOption";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster toastOptions={toastOptions} />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
