import { useMemo } from 'react';
import { useContractRead } from 'wagmi';

import { NFTRY_ABI } from '~/abi/nftry-abi';

interface Param {
  contractAddress: `0x${string}`;
  lender: `0x${string}`;
}
export const useGetAllLentNFT = ({ contractAddress, lender }: Param) => {
  const functionName = 'getAllLentNFTListByWalletAddress';
  const args = useMemo(() => [lender], [lender]);

  const enabled = useMemo(
    () => contractAddress !== undefined && lender !== undefined,
    [contractAddress, lender]
  );

  const { refetch, isFetching } = useContractRead({
    address: contractAddress,
    abi: NFTRY_ABI,
    functionName,
    args,
    enabled,
  });

  return { refetch, isFetching };
};
