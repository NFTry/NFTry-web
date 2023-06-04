import { polygonMumbai } from '@wagmi/chains';
import { getDefaultConfig } from 'connectkit';
import { createConfig } from 'wagmi';

import { LUNIVERSE_WSS_ENDPOINT, WALLETCONNECT_PROJECT_ID } from '~/constants';

export const chains = [polygonMumbai];

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    chains,

    webSocketPublicClient: LUNIVERSE_WSS_ENDPOINT,
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,

    // Required
    appName: 'NFTRY',

    // Optional
    appDescription: 'NFT rental platform',
    appUrl: 'https://nftry.xyz', // your app's url
    appLogo: 'https://assets.nftry.xyz/logo.png', // your app's logo,no bigger than 1024x1024px (max. 1MB)
  })
);
