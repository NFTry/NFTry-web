import tw, { css, styled } from 'twin.macro';

import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';
import { LISTING_STEP } from '~/types';

import { Header } from './components/header';
import { useNFTListingStep } from './hooks/use-listing-step';
import { NFTListingStep0 } from './pages/step-0';
import { NFTListingStep1 } from './pages/step-1';

const ListingPage = () => {
  const { step } = useNFTListingStep();
  const headerText =
    step === LISTING_STEP.STEP_0 ? 'Select a NFT you want to lend' : 'Set a deposit and fee';

  return (
    <Wrapper>
      <Gnb />
      <ContentWrapper>
        <Header text={headerText} />

        {step === LISTING_STEP.STEP_0 && <NFTListingStep0 />}
        {step === LISTING_STEP.STEP_1 && <NFTListingStep1 />}
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
    flex flex-col w-full pt-184 pb-160 px-80 max-w-1440 mx-auto gap-48
  `,
  css`
    min-height: calc(100vh - 128px);
  `,
]);

export default ListingPage;
