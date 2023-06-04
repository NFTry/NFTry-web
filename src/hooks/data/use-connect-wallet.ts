import { useAccount, useConnect, useDisconnect } from 'wagmi';

import { DEFAULT_CHAIN_ID } from '~/constants';

export const useConnectWallet = (chainId: number = DEFAULT_CHAIN_ID) => {
  const { address, isConnected } = useAccount();

  const { connect, error, isLoading } = useConnect({ chainId });

  const { disconnect } = useDisconnect();

  return {
    connect,
    disconnect,
    isConnected,
    isConnectLoading: isLoading,
    isConnectError: error,

    address,
  };
};
