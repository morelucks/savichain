import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import dotenv from 'dotenv';

const lisk = {
    id: 4202, // Unique chain ID
    name: 'Lisk Sepolia Testnet',
    network: 'lisk-testnet',
    nativeCurrency: {
      name: 'Lisk',
      symbol: 'LSK',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.sepolia-api.lisk.com/'], // Replace with actual Lisk Testnet RPC URL
      },
      public: {
        http: ['https://rpc.sepolia-api.lisk.com/'],
      },
    },
    blockExplorers: {
      default: { name: 'Lisk Explorer', url: 'https://sepolia-blockscout.lisk.com/' },
    },
    testnet: true,
  };
  

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'eb759eb502f0dffe0cc8e491853da8ed',
  chains: [mainnet, polygon, optimism, arbitrum, base, lisk],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

