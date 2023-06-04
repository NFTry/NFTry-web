import { useMemo } from 'react';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { NFTRY_ABI } from '~/abi/nftry-abi';

interface Param {
  contractAddress: `0x${string}`;
  nftAddress: `0x${string}`;
  tokenId: number;
}
export const useBorrow = ({ contractAddress, nftAddress, tokenId }: Param) => {
  const functionName = 'borrow';
  const args = useMemo(() => [nftAddress, tokenId], [nftAddress, tokenId]);

  const enabled = useMemo(
    () => nftAddress !== undefined && contractAddress !== undefined,
    [nftAddress, contractAddress]
  );

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: NFTRY_ABI,
    functionName,
    args,
    enabled,
  });

  const { data, write, writeAsync } = useContractWrite(config);

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: data?.hash,
  });

  return {
    config,
    data,
    isLoading,
    isSuccess,
    isError,
    write,
    writeAsync,
    error,
  };
};
