import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, polygon, optimism, arbitrum, base, sepolia, polygonMumbai, optimismSepolia, arbitrumSepolia } from '@reown/appkit/networks'
import { siweConfig } from './siweConfig'

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
const networks = [mainnet, polygon, optimism, arbitrum, base, sepolia, polygonMumbai, optimismSepolia, arbitrumSepolia, lisk]

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
    analytics: true,
    email: true, // Enable email authentication
    socials: [
      "google",
      "x", 
      "github",
      "discord",
      "apple",
      "facebook",
      "farcaster"
    ],
    emailShowWallets: true
  },
  allWallets: "SHOW",
  siweConfig: siweConfig // Add SIWE authentication
})

export { wagmiAdapter }

