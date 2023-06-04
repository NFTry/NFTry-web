export const TEST = import.meta.env.BROWSER;
export const IS_MOCK = import.meta.env.VITE_ENABLE_MOCK === 'true';

export const IS_LOCAL = import.meta.env.VITE_START_ENV === 'local';
export const IS_DEV = import.meta.env.VITE_START_ENV === 'dev';
export const IS_PROD = import.meta.env.VITE_START_ENV === 'prod';

export const IS_MAINNET = IS_PROD;

export const API_URL = IS_PROD ? '' : 'http://localhost:8080';
export const BASE_URL = IS_PROD ? '' : 'http://localhost:3000';

export const BREAKPOINT = {
  SM: 0,
  MD: 848,
  LG: 1280,

  MEDIA_SM: '(min-width: 0px)',
  MEDIA_MD: '(min-width: 848px)',
  MEDIA_LG: '(min-width: 1280px)',
};

export const AWS_REGION = 'us-east-1';

export const CHAIN_ID = {
  MUMBAI: 80001,
  ETH: 1,
  GOERLI: 5,
};
export const DEFAULT_CHAIN_ID = CHAIN_ID.MUMBAI;

type Contract = 'SAMPLE' | 'NFTRY';
export const CONTRACT_ADDRESS: Record<Contract, `0x${string}`> = {
  SAMPLE: IS_MAINNET ? '0x' : '0x',
  NFTRY: IS_MAINNET
    ? '0x7DA77E0C6A614B578832b5bF3c7Bc859E3a15402'
    : '0x7DA77E0C6A614B578832b5bF3c7Bc859E3a15402',
};

export const POPUP_ID = {
  NFT_LISTING_SUCCESS: 'NFT_LISTING_SUCCESS',
};

export const WALLETCONNECT_PROJECT_ID = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
export const LUNIVERSE_NODE_ID = import.meta.env.VITE_LUNIVERSE_NODE_ID;
export const LUNIVERSE_API_KEY_ID = import.meta.env.VITE_LUNIVERSE_API_KEY_ID;
export const LUNIVERSE_API_KEY_SECRET = import.meta.env.VITE_LUNIVERSE_API_KEY_SECRET;
export const LUNIVERSE_WSS_ENDPOINT = import.meta.env.VITE_LUNIVERSE_WSS_ENDPOINT;

export const PIXMOS_ADDRESS = '0xfa95881a5e79f54651bc721c6d314435a675482d';
