import tw from 'twin.macro';

import { Logo } from '~/components/logo';

export const Introduction = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Logo width={327} height={72} />
        <Title>
          {'NFT Rental Platform.\n'}
          <Gray>{'Awaken the sleeping NFTs,\n'}</Gray>
          <Gray>{'Seamlessly Rent and Explore.'}</Gray>
        </Title>
      </TitleWrapper>
      <DescriptionWrapper>
        <Description>
          {'NFTRY enables '}
          <DescriptionBold>{'temporary lending '}</DescriptionBold>
          {'of '}
          <DescriptionBold>{'unused NFTs'}</DescriptionBold>
          {', generating income through usage fees. The fee can be collected '}
          <DescriptionBold>{'real-time '}</DescriptionBold>
          {'and a higher deposit ensure '}
          <DescriptionBold>{'secure retrieval.\n\n'}</DescriptionBold>
          <DescriptionBold>
            {'Experience and utilize NFTs without direct purchase. '}
          </DescriptionBold>
          {'Easily rent NFTs '}
          <DescriptionBold>{'for a short period with a small fee. '}</DescriptionBold>
          {'Retrieve the deposit, excluding a usage fee based on duration.'}
        </Description>
      </DescriptionWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col
`;

const TitleWrapper = tw.div`
  flex flex-col gap-24
`;
const Title = tw.div`
  font-bold text-54 leading-68 text-black whitespace-pre-wrap
`;
const Gray = tw.span`
  text-black/40
`;

const DescriptionWrapper = tw.div`
  w-full flex justify-end
`;
const Description = tw.div`
  w-400 text-20 leading-30 whitespace-pre-wrap text-black/70
`;
const DescriptionBold = tw.span`
  font-semibold
`;
