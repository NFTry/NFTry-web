import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';
import { useConnectWallet } from '~/hooks/data/use-connect-wallet';

import { Architecture } from './components/architecture';
import { BorrowedNFTs } from './components/borrowed-nfts';
import { Introduction } from './components/introduction';
import { LentNFTs } from './components/lent-nfts';
import { TryNow } from './components/try-now';

const MainPage = () => {
  const { isConnected } = useConnectWallet();

  return (
    <Wrapper>
      <Gnb />
      <ContentWrapper>
        <Introduction />
        <Architecture />
        <TryNow />

        {isConnected && (
          <>
            <LentNFTs />
            <BorrowedNFTs />
          </>
        )}
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col w-full
`;

const ContentWrapper = styled.div(() => [
  tw`
    flex flex-col w-full pb-160 pt-264 gap-160 px-80
  `,
  css`
    min-height: calc(100vh - 128px);
  `,
]);

export default MainPage;
