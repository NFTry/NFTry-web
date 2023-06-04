import { useMemo } from 'react';
import { useContractRead } from 'wagmi';

import { NFTRY_ABI } from '~/abi/nftry-abi';

interface Param {
  contractAddress: `0x${string}`;
  borrower: `0x${string}`;
}
export const useGetAllBorrowableNFT = ({ contractAddress, borrower }: Param) => {
  const functionName = 'getAllBorrowedNFTListByWalletAddress';
  const args = useMemo(() => [borrower], [borrower]);

  const enabled = useMemo(
    () => contractAddress !== undefined && borrower !== undefined,
    [contractAddress, borrower]
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
