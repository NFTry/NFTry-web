import { useMemo } from 'react';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { NFTRY_ABI } from '~/abi/nftry-abi';

interface Param {
  contractAddress: `0x${string}`;
  nftAddress: `0x${string}`;
  tokenId: number;
  depositFee: number;
  fixedFee: number;
  usageFee: number;
}
export const useList = ({
  contractAddress,
  nftAddress,
  tokenId,
  depositFee,
  fixedFee,
  usageFee,
}: Param) => {
  const functionName = 'list';
  const args = useMemo(
    () => [contractAddress, nftAddress, tokenId, depositFee, fixedFee, usageFee],
    [contractAddress, nftAddress, tokenId, depositFee, fixedFee, usageFee]
  );

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
    onError(error) {
      console.log('Error', error);
    },
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
