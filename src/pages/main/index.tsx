import { css } from '@emotion/react';
import { useEffect } from 'react';
import tw, { styled } from 'twin.macro';

import { getNftMetadataByTokenId } from '~/api/luniverse/nft-metadata';
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

  useEffect(() => {
    const fetch = async () => {
      const res = await getNftMetadataByTokenId('0xfa95881a5e79f54651bc721c6d314435a675482d', '1');
      console.log(res);
    };

    fetch();
  }, []);

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
    flex flex-col w-full pb-160 pt-264 gap-160 px-80 max-w-1440 mx-auto
  `,
  css`
    min-height: calc(100vh - 128px);
  `,
]);

export default MainPage;
