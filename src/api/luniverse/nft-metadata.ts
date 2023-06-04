import axios from 'axios';

interface Response {
  code: string;
  data: {
    name: string;
    symbol: string;
    contractType: 'ERC-721';
    contractDeployerAddress: string;
    deployedTransactionHash: string;
    contractAddress: string;
    tokenUriSyncedAt: string;
    metadataSyncedAt: string;
    tokenUri: string;
    rawMetadata: string;
  };
}

export const getNftMetadataByTokenId = async (contractAddress: string, tokenId: string) =>
  await axios.post<Response>(
    '/api/polygon/mumbai/nft/getNftMetadataByTokenId',
    {
      contractAddress,
      tokenId,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    }
  );
