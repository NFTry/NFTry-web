import NFTPixmosEpic from '~/assets/images/nft-pixmos-epic.png';
import NFTPixmosLegendary from '~/assets/images/nft-pixmos-legendary.png';
import NFTPixmosRare from '~/assets/images/nft-pixmos-rare.png';

export const nftData = [
  {
    image: NFTPixmosLegendary,
    collectionName: 'PIXMOS Commander NFT',
    name: 'Legendary',
    contractAddress: '0x0',
    tokenId: '1',

    properties: ['MINING SPEED +2 PIXSOL/hr', 'ATTACK POWER +15%', 'DEFENSE POSER -5%'],
  },

  {
    image: NFTPixmosEpic,
    collectionName: 'PIXMOS Commander NFT',
    name: 'Epic',
    contractAddress: '0x0',
    tokenId: '33',

    properties: ['DEFENSE POWER + 10%', 'MINING SPEED -0.3 PIXSOL/hr'],
  },

  {
    image: NFTPixmosRare,
    collectionName: 'PIXMOS Commander NFT',
    name: 'Rare',
    contractAddress: '0x0',
    tokenId: '50',

    properties: ['ATTACK POWER +2%', 'DEFENSE POWER -1%'],
  },
];
