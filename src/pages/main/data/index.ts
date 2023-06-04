import BgBayc from '~/assets/images/bg-bayc.png';
import BgEns from '~/assets/images/bg-ens.png';
import BgPixmos from '~/assets/images/bg-pixmos.png';
import LogoBayc from '~/assets/images/logo-bayc.png';
import LogoEns from '~/assets/images/logo-ens.png';
import LogoPixmos from '~/assets/images/logo-pixmos.png';

export const cardData = [
  {
    background: BgPixmos,
    logo: LogoPixmos,
    name: 'PIXMOS Commander NFT',
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
  },

  {
    background: BgEns,
    logo: LogoEns,
    name: 'ENS: Ethereum Name Service',
    description:
      'Own your username, store an avatar and other profile data, and use it across services.',
    utilities: [
      'No more copying and pasting long addresses.',
      'Can use ENS name to store all of addresses and receive any cryptocurrency, token, or NFT.',
    ],
    depositFeeFloor: 1000,
    fixedFeeFloor: 20,
    usageFeeFloor: 1,
  },

  {
    background: BgBayc,
    logo: LogoBayc,
    name: 'Bored Ape Yacht Club',
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
  },
];
