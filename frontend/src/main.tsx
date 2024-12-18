import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { ConnectButton } from '@rainbow-me/rainbowkit';


  const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
              <RainbowKitProvider>

    <App />
    </RainbowKitProvider>

          </QueryClientProvider>

     </WagmiProvider>

    
  </StrictMode>,
)
