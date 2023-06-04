import tw from 'twin.macro';

import { parseNumberWithComma } from '~/utils/number';

import { lentNFTData } from '../data';
import { LentNFTsCard } from './lent-nfts-card';

export const LentNFTs = () => {
  return (
    <Wrapper>
      <Title>Lent NFTs</Title>
      <ContentWrapper>
        <StatusWrapper>
          <StatusCard>
            <StatusLabel>Total Lents</StatusLabel>
            <StatusValue>{`${parseNumberWithComma(12)} NFTs`}</StatusValue>
          </StatusCard>
          <StatusCard>
            <StatusLabel>Total Earned</StatusLabel>
            <StatusValue>{`${parseNumberWithComma(123029)} USDC`}</StatusValue>
          </StatusCard>
        </StatusWrapper>

        <CardWrapper>
          {lentNFTData.map(
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
              borrowedBy,
              totalEarned,
              claimable,
            }) => (
              <LentNFTsCard
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
                borrowedBy={borrowedBy}
                totalEarned={totalEarned}
                claimable={claimable}
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
const StatusWrapper = tw.div`
  flex gap-40
`;

const StatusCard = tw.div`
  flex-col flex-center flex-1 h-171 gap-16 rounded-8 border-1 border-solid border-black/10
`;
const StatusLabel = tw.div`
  text-24 leading-32 font-semibold text-black text-center
`;
const StatusValue = tw.div`
  text-36 leading-43 font-semibold text-black text-center
`;

const CardWrapper = tw.div`
  flex flex-col gap-48
`;
