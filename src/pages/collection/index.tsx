import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';
import { CONTRACT_ADDRESS, PIXMOS_ADDRESS } from '~/constants';
import { useGetAllBorrowableNFT } from '~/hooks/contract/get-all-borrowable-nft';
import { useRequirePrarams } from '~/hooks/pages/use-require-params';

import { Banner } from './components/banner';
import { BannerContent } from './components/banner-content';
import { NFTsCard } from './components/nfts-card';
import { borrowableNFTData, collectionData } from './data';

const CollectionPage = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const collection = collectionData.find(({ contractAddress }) => contractAddress === id);

  useRequirePrarams([id], () => navigator('/'));

  const { data } = useGetAllBorrowableNFT({
    contractAddress: CONTRACT_ADDRESS.NFTRY,
    nftAddress: PIXMOS_ADDRESS,
  });

  useEffect(() => {
    if (!collection) navigator('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection]);

  return (
    <Wrapper>
      <Gnb />
      <Banner />
      <ContentWrapper>
        <BannerContent />
        <CardWrapper>
          {borrowableNFTData.map(
            ({
              image,
              collectionName,
              name,
              tokenId,
              properties,
              depositFee,
              fixedFee,
              usageFee,
              isSample,
            }) => (
              <NFTsCard
                key={`${name}-${tokenId}}`}
                image={image}
                collectionName={collectionName}
                name={name}
                tokenId={tokenId}
                properties={properties}
                depositFee={depositFee}
                fixedFee={fixedFee}
                usageFee={usageFee}
                isSample={isSample}
              />
            )
          )}
        </CardWrapper>
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
    flex flex-col w-full pt-16 pb-160 px-80 max-w-1440 mx-auto gap-80
  `,
  css`
    min-height: calc(100vh - 128px);
  `,
]);

const CardWrapper = tw.div`
  flex flex-col gap-48
`;

export default CollectionPage;
