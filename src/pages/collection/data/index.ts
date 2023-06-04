import BgPixmos from '~/assets/images/bg-pixmos-light.png';
import LogoPixmos from '~/assets/images/logo-pixmos.png';
import NFTPixmosEpic from '~/assets/images/nft-pixmos-epic.png';
import NFTPixmosLegendary from '~/assets/images/nft-pixmos-legendary.png';
import NFTPixmosRare from '~/assets/images/nft-pixmos-rare.png';

export const collectionData = {
  ['pixmos-commander-nft']: {
    background: BgPixmos,
    logo: LogoPixmos,
    name: 'PIXMOS Commander NFT',
    description:
      'PIXMOS is a turn-based strategy game aiming for the conquest of the earth.\nCommander NFT is a main utility NFT in PIXMOS',
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
};

export const borrowableNFTData = [
  {
    image: NFTPixmosLegendary,
    collectionName: 'PIXMOS Commander NFT',
    name: 'Legendary',
    tokenId: '1',

    properties: ['MINING SPEED +2 PIXSOL/hr', 'ATTACK POWER +15%', 'DEFENSE POSER -5%'],

    depositFee: 1000,
    fixedFee: 20,
    usageFee: 10,

    isSample: false,
  },

  {
    image: NFTPixmosEpic,
    collectionName: 'PIXMOS Commander NFT',
    name: 'Epic',
    tokenId: '33',

    properties: ['DEFENSE POWER + 10%', 'MINING SPEED -0.3 PIXSOL/hr'],

    depositFee: 500,
    fixedFee: 50,
    usageFee: 10,

    isSample: false,
  },

  {
    image: NFTPixmosRare,
    collectionName: 'PIXMOS Commander NFT',
    name: 'Rare',
    tokenId: '50',

    properties: ['ATTACK POWER +2%', 'DEFENSE POWER -1%'],

    depositFee: 100,
    fixedFee: 5,
    usageFee: 0.5,

    isSample: false,
  },
];
