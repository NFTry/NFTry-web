import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

import { IconBack } from '~/components/icons';
import { LISTING_STEP } from '~/types';

import { useNFTListingStep } from '../hooks/use-listing-step';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}
export const Header = ({ text }: Props) => {
  const { step, goPrev } = useNFTListingStep();

  return (
    <Wrapper>
      {text}
      {step >= LISTING_STEP.STEP_1 && (
        <ButtonWrapper onClick={goPrev}>
          <IconBack width={24} height={24} />
          Back
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  text-center font-bold text-black text-40 leading-48 relative
`;

const ButtonWrapper = tw.div`
  absolute left-216 absolute-center-y flex-center gap-8 clickable
  text-16 leading-22
`;
