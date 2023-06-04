import { useMemo } from 'react';
import { useContractRead } from 'wagmi';

import { NFTRY_ABI } from '~/abi/nftry-abi';

interface Param {
  contractAddress: `0x${string}`;
  nftAddress: `0x${string}`;
}
export const useGetAllBorrowableNFT = ({ contractAddress, nftAddress }: Param) => {
  const functionName = 'getAllBorrowableNFTListByContractAddress';
  const args = useMemo(() => [nftAddress], [nftAddress]);

  const enabled = useMemo(
    () => contractAddress !== undefined && nftAddress !== undefined,
    [contractAddress, nftAddress]
  );

  const { data, refetch, isFetching } = useContractRead({
    address: contractAddress,
    abi: NFTRY_ABI,
    functionName,
    args,
    enabled,
  });

  return { data, refetch, isFetching };
};
