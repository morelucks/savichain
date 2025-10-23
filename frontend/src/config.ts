import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, polygon, optimism, arbitrum, base } from '@reown/appkit/networks'

// Custom Lisk network
const lisk = {
  id: 4202,
  name: 'Lisk Sepolia Testnet',
  network: 'lisk-testnet',
  nativeCurrency: {
    name: 'Lisk',
    symbol: 'LSK',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia-api.lisk.com/'],
    },
    public: {
      http: ['https://rpc.sepolia-api.lisk.com/'],
    },
  },
  blockExplorers: {
    default: { name: 'Lisk Explorer', url: 'https://sepolia-blockscout.lisk.com/' },
  },
  testnet: true,
}

// 1. Get projectId from https://dashboard.reown.com
const projectId = 'eb759eb502f0dffe0cc8e491853da8ed'

// 2. Create a metadata object
const metadata = {
  name: 'SaviChain',
  description: 'SaviChain - Decentralized Savings Platform',
  url: 'https://savichain.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set the networks
const networks = [mainnet, polygon, optimism, arbitrum, base, lisk]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true
  }
})

export { wagmiAdapter }

