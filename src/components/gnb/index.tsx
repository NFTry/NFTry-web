import { ConnectKitButton } from 'connectkit';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { useConnectWallet } from '~/hooks/data/use-connect-wallet';

import { ConnectWalletButton } from '../buttons/connect-wallet';
import { DisconnectWalletButton } from '../buttons/disconnect-wallet';
import { LendMyNFTButton } from '../buttons/lend-by-nft';
import { Logo } from '../logo';

export const Gnb = () => {
  const { disconnect } = useConnectWallet();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LogoWrapper onClick={() => navigate('/')}>
        <Logo width={109} height={24} />
      </LogoWrapper>
      <ButtonWrapper>
        <ConnectKitButton.Custom>
          {({ isConnected, show }) =>
            isConnected ? (
              <ButtonWrapper>
                <DisconnectWalletButton text="Disconnect" onClick={() => disconnect()} />
                <LendMyNFTButton text="Lend My NFT" onClick={() => navigate('/listing')} />
              </ButtonWrapper>
            ) : (
              <ConnectWalletButton text="Connect Wallet" onClick={() => show()} />
            )
          }
        </ConnectKitButton.Custom>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex w-full h-104 items-center justify-between px-24 flex-shrink-0 fixed top-0 left-0 z-10 bg-white
`;

const LogoWrapper = tw.div`
  w-109 h-24 flex-center flex-shrink-0 clickable
`;

const ButtonWrapper = tw.div`
  flex items-center gap-40
`;
