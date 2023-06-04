import { HTMLAttributes } from 'react';
import tw, { css, styled } from 'twin.macro';

import { BorrowButton } from '~/components/buttons/borrow';
import { IconBullet } from '~/components/icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  background: string;
  logo: string;

  name: string;
  description: string;
  utilities: string[];

  depositFeeFloor: number;
  fixedFeeFloor: number;
  usageFeeFloor: number;

  disabled?: boolean;

  handleBorrowClick?: () => void;
}

export const TryCard = ({
  background,
  logo,
  name,
  description,
  utilities,
  depositFeeFloor,
  fixedFeeFloor,
  usageFeeFloor,
  disabled,
  handleBorrowClick,
  ...rest
}: Props) => {
  return (
    <Wrapper {...rest}>
      <ImageWrapper>
        <BackgroundImage style={{ backgroundImage: `url(${background})` }} />
        <Logo style={{ backgroundImage: `url(${logo})` }} />
      </ImageWrapper>
      <ContentWrapper>
        <NameDescriptionWrapper>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </NameDescriptionWrapper>
        <Divider />
        <UtilitiesWrapper>
          {utilities.map(utility => (
            <UtilityWrapper key={utility}>
              <Bullet>
                <IconBullet width={24} height={24} />
              </Bullet>
              <Utility>{utility}</Utility>
            </UtilityWrapper>
          ))}
        </UtilitiesWrapper>
        <FeesWrapper>
          <FeeWrapper>
            <FeeLabel>Deposit</FeeLabel>
            <Divider />
            <FeeValueWrapper>
              <FeeValue>{`${depositFeeFloor}~`}</FeeValue>
              <FeeValueLabel>USDC</FeeValueLabel>
            </FeeValueWrapper>
          </FeeWrapper>

          <FeeWrapper>
            <FeeLabel>Fixed Fee</FeeLabel>
            <Divider />
            <FeeValueWrapper>
              <FeeValue>{`${fixedFeeFloor}~`}</FeeValue>
              <FeeValueLabel>USDC</FeeValueLabel>
            </FeeValueWrapper>
          </FeeWrapper>

          <FeeWrapper>
            <FeeLabel>Usage Fee</FeeLabel>
            <Divider />
            <FeeValueWrapper>
              <FeeValue>{`${usageFeeFloor}~`}</FeeValue>
              <FeeValueLabel>USDC/hr</FeeValueLabel>
            </FeeValueWrapper>
          </FeeWrapper>
        </FeesWrapper>
        <BorrowButton text="Borrow" onClick={handleBorrowClick} disabled={disabled} />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => [
  tw`
    flex flex-col w-400 rounded-8 overflow-hidden bg-white
  `,
  css`
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
  `,
]);

const ImageWrapper = tw.div`
  w-full h-210 relative
`;

const BackgroundImage = tw.div`
  w-full h-160 bg-center bg-no-repeat bg-cover
`;

const Logo = styled.div(() => [
  tw`
    w-96 h-96 rounded-full bg-center bg-no-repeat bg-cover absolute bottom-0 absolute-center-x bg-white
  `,
  css`
    filter: drop-shadow(0px 4px 32px rgba(0, 0, 0, 0.2));
  `,
]);

const ContentWrapper = tw.div`
  flex flex-col gap-24 px-24 pb-26 pt-8 flex-1
`;

const NameDescriptionWrapper = tw.div`
  flex flex-col gap-8
`;

const Name = tw.div`
  text-center text-24 leading-32 font-semibold text-black
`;

const Description = tw.div`
  text-center text-14 leading-20 font-medium text-black min-h-60
`;

const Divider = tw.div`
  w-full h-1 flex-shrink-0 bg-black/10
`;

const UtilitiesWrapper = tw.div`
  flex flex-col gap-4 flex-1
`;

const UtilityWrapper = tw.div`
  flex gap-2 items-center
`;
const Bullet = tw.div`
  w-24 h-24 flex-center flex-shrink-0
`;
const Utility = tw.div`
  flex flex-1 text-14 leading-20 text-black/70
`;

const FeesWrapper = tw.div`
  flex gap-8 p-12 bg-[#F4F4F4] rounded-4
`;

const FeeWrapper = tw.div`
  flex flex-col gap-8 flex-1
`;

const FeeLabel = tw.div`
  text-14 leading-20 font-medium text-black/70 text-center
`;

const FeeValueWrapper = tw.div`
  flex flex-col
`;

const FeeValue = tw.div`
  text-16 leading-20 font-semibold text-black text-center
`;
const FeeValueLabel = tw.div`
  text-12 leading-18 text-black/30 text-center
`;
