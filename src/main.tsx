import '~/styles/index.css';
import '~/configs/polyfill-wallet';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider } from 'connectkit';
import ReactDOM from 'react-dom/client';
import { WagmiConfig } from 'wagmi';

import App from '~/app.tsx';
import { config } from '~/configs/setup-wallet';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="soft">
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </QueryClientProvider>
);
