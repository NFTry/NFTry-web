import tw from 'twin.macro';

import { borrowedNFTData } from '../data';
import { BorrowedNFTsCard } from './borrowed-nfts-card';

export const BorrowedNFTs = () => {
  return (
    <Wrapper>
      <Title>Borrowed NFTs</Title>
      <ContentWrapper>
        <CardWrapper>
          {borrowedNFTData.map(
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
              borrowedFrom,
              usageTime,
              remainingDeposit,
            }) => (
              <BorrowedNFTsCard
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
                borrowedFrom={borrowedFrom}
                usageTime={usageTime}
                remainingDeposit={remainingDeposit}
              />
            )
          )}
        </CardWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col w-full gap-48
`;

const Title = tw.div`
  font-bold text-40 leading-48 text-black text-center
`;

const ContentWrapper = tw.div`
  flex flex-col gap-48
`;
const CardWrapper = tw.div`
  flex flex-col gap-48
`;
