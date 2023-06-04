import { isAddress } from 'viem';
import { useBalance } from 'wagmi';

import { parseNumberWithComma, parseNumberWithUnit } from '~/utils/number';

interface Balance {
  value: bigint;
  formatted: string;
  formattedNumber: number;
  formattedWithComma: string;
  formattedWithUnit: string;

  decimals: number;
  symbol: string;
}

export const useNativeTokenBalances = (address?: `0x${string}`): Balance => {
  const enabled = isAddress(address ?? '0x');

  const { data } = useBalance({
    address: address ?? '0x',
    enabled,
  });

  return {
    value: data?.value ?? 0n,
    formatted: data?.formatted ?? '',
    formattedNumber: Number(data?.formatted ?? 0),
    formattedWithComma: parseNumberWithComma(Number(data?.formatted ?? 0)),
    formattedWithUnit: parseNumberWithUnit(Number(data?.formatted ?? 0)),

    decimals: data?.decimals ?? 0,
    symbol: data?.symbol ?? '',
  };
};

export const useTokenBalances = (address?: `0x${string}`, token?: `0x${string}`): Balance => {
  const enabled = isAddress(address ?? '0x') && isAddress(token ?? '0x');

  const { data } = useBalance({
    address: address ?? '0x',
    token: token ?? '0x',
    enabled,
  });

  return {
    value: data?.value ?? 0n,
    formatted: data?.formatted ?? '',
    formattedNumber: Number(data?.formatted ?? 0),
    formattedWithComma: parseNumberWithComma(Number(data?.formatted ?? 0)),
    formattedWithUnit: parseNumberWithUnit(Number(data?.formatted ?? 0)),

    decimals: data?.decimals ?? 0,
    symbol: data?.symbol ?? '',
  };
};
