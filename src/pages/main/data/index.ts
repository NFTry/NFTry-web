import BgBayc from '~/assets/images/bg-bayc.png';
import BgEns from '~/assets/images/bg-ens.png';
import BgPixmos from '~/assets/images/bg-pixmos.png';
import LogoBayc from '~/assets/images/logo-bayc.png';
import LogoEns from '~/assets/images/logo-ens.png';
import LogoPixmos from '~/assets/images/logo-pixmos.png';
import NFTBayc from '~/assets/images/nft-bayc.png';
import NFTEns from '~/assets/images/nft-ens.png';
import NFTPixmosLegendary from '~/assets/images/nft-pixmos-legendary.png';

export const tryNowData = [
  {
    background: BgPixmos,
    logo: LogoPixmos,
    name: 'PIXMOS Commander NFT',
    contractAddress: '0x0',
    description:
      'PIXMOS is a turn-based strategy game aiming for the conquest of the earth. Commander NFT is a main utility NFT in PIXMOS',
    utilities: [
      'Can be applied on pixel, upgrading it to base for PvP pixel warz.',
      'Base pixel with Commander NFT cannot be attacked.',
      'Can Initiate pixel reward airdrops.',
    ],
    depositFeeFloor: 1000,
    fixedFeeFloor: 20,
    usageFeeFloor: 1,

    disabled: false,
  },

  {
    background: BgEns,
    logo: LogoEns,
    name: 'ENS: Ethereum Name Service',
    contractAddress: '0x1',
    description:
      'Own your username, store an avatar and other profile data, and use it across services.',
    utilities: [
      'No more copying and pasting long addresses.',
      'Can use ENS name to store all of addresses and receive any cryptocurrency, token, or NFT.',
    ],
    depositFeeFloor: 1000,
    fixedFeeFloor: 20,
    usageFeeFloor: 1,

    disabled: true,
  },

  {
    background: BgBayc,
    logo: LogoBayc,
    name: 'Bored Ape Yacht Club',
    contractAddress: '0x2',
    description:
      'A collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain.',
    utilities: [
      'Can minting BAYC-related NFTs.',
      'Can participate in holder-only games / parties.',
      'Can participate in the bathroom game.',
    ],
    depositFeeFloor: 1000,
    fixedFeeFloor: 20,
    usageFeeFloor: 1,

    disabled: true,
  },
];

export const lentNFTData = [
  {
    image: NFTPixmosLegendary,
    collectionName: 'PIXMOS Commander NFT',
    name: 'Legendary',
    contractAddress: '0x0',
    tokenId: '1',

    properties: ['MINING SPEED +2 PIXSOL/hr', 'ATTACK POWER +15%', 'DEFENSE POSER -5%'],

    depositFee: 1000,
    fixedFee: 20,
    usageFee: 1,

    borrowedBy: '0x48DBa2D1b6C89Bf8234C2B63554369aDC7Ae3258',

    totalEarned: 12300,
    claimable: 50,

    isSample: false,
  },

  {
    image: NFTBayc,
    collectionName: 'Bored Ape Yacht Club',
    name: 'BAYC',
    contractAddress: '0x2',
    tokenId: '5033',

    properties: [
      'BACKGROUND : Blue',
      'CLOTHES : Bandolier',
      'EYES : Sleepy',
      'FUR : Dark Brown',
      'HAT : Beanie',
      'MOUTH : Bored Pipe',
    ],

    depositFee: 1000,
    fixedFee: 20,
    usageFee: 1,

    borrowedBy: '',

    totalEarned: 0,
    claimable: 0,

    isSample: true,
  },
];

export const borrowedNFTData = [
  {
    image: NFTEns,
    collectionName: 'ENS: Ethereum Name Service',
    name: 'polygon.eth',
    contractAddress: '0x1',
    tokenId: '1',

    properties: [
      'Expiration Date: Monday, September 12, 2044',
      'Registration Date: Saturday, September 12, 2020',
    ],

    depositFee: 1000,
    fixedFee: 20,
    usageFee: 1,

    borrowedFrom: '0x48DBa2D1b6C89Bf8234C2B63554369aDC7Ae3258',

    usageTime: 12,
    remainingDeposit: 1029,

    isSample: true,
  },
];
