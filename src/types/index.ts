export enum LISTING_STEP {
  STEP_0 = 0,
  STEP_1 = 1,
}

export interface ListingNft {
  collectionName: string;
  name: string;

  contractAddress: string;
  tokenId: string;
}
