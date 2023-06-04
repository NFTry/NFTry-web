import { useMemo } from 'react';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { NFTRY_ABI } from '~/abi/nftry-abi';

interface Param {
  contractAddress: `0x${string}`;
  nftAddress: `0x${string}`;
  tokenId: number;
  deposit: number;
  fixedFee: number;
  usageFee: number;
}
export const useList = ({
  contractAddress,
  nftAddress,
  tokenId,
  deposit,
  fixedFee,
  usageFee,
}: Param) => {
  const functionName = 'list';
  const args = useMemo(
    () => [
      nftAddress,
      tokenId,
      BigInt(deposit * 1e18),
      BigInt(fixedFee * 1e18),
      BigInt(usageFee * 1e18),
    ],
    [nftAddress, tokenId, deposit, fixedFee, usageFee]
  );

  const enabled = useMemo(
    () =>
      nftAddress !== undefined &&
      contractAddress !== undefined &&
      deposit >= 0 &&
      fixedFee >= 0 &&
      usageFee >= 0,
    [contractAddress, deposit, fixedFee, nftAddress, usageFee]
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
