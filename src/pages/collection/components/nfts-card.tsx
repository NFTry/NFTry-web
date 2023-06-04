import { chunk } from 'lodash-es';
import { HTMLAttributes } from 'react';
import tw, { css, styled } from 'twin.macro';

import { BorrowNowButton } from '~/components/buttons/borrow-now';
import { IconBullet } from '~/components/icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;

  collectionName: string;

  name: string;
  tokenId: string;

  properties: string[];

  depositFee: number;
  fixedFee: number;
  usageFee: number;

  isSample: boolean;
}

export const NFTsCard = ({
  image,
  collectionName,
  name,
  tokenId,
  properties,
  depositFee,
  fixedFee,
  usageFee,

  isSample,

  ...rest
}: Props) => {
  return (
    <Wrapper {...rest}>
      <ImageWrapper style={{ backgroundImage: `url(${image})` }}>
        {isSample && <Sample>EXAMPLE</Sample>}
      </ImageWrapper>
      <PrimaryContentWrapper>
        <NamePropertyWrapper>
          <NameWrapper>
            <CollectionName>{collectionName}</CollectionName>
            <Name>{`${name} #${tokenId}`}</Name>
          </NameWrapper>

          <PropertiesOuterWrapper>
            {chunk(properties, 3).map((properties, index) => (
              <PropertiesWrapper key={index}>
                {properties.map(property => (
                  <PropertyWrapper key={property}>
                    <Bullet>
                      <IconBullet width={24} height={24} />
                    </Bullet>
                    <Property>{property}</Property>
                  </PropertyWrapper>
                ))}
              </PropertiesWrapper>
            ))}
          </PropertiesOuterWrapper>
        </NamePropertyWrapper>

        <FeesWrapper>
          <FeeWrapper>
            <FeeLabel>Deposit</FeeLabel>
            <FeeValue>{`${depositFee} USDC`}</FeeValue>
          </FeeWrapper>

          <FeeWrapper>
            <FeeLabel>Fixed Fee</FeeLabel>
            <FeeValue>{`${fixedFee} USDC`}</FeeValue>
          </FeeWrapper>

          <FeeWrapper>
            <FeeLabel>Usage Fee</FeeLabel>
            <FeeValue>{`${usageFee} USDC/hr`}</FeeValue>
          </FeeWrapper>
        </FeesWrapper>
      </PrimaryContentWrapper>

      <SecondartContentWrapper>
        <BorrowNowButton text="Borrow now" />
      </SecondartContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => [
  tw`
    w-full flex gap-24 p-24 bg-white rounded-8
  `,
  css`
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
    font-variant-ligatures: no-contextual;
  `,
]);

const ImageWrapper = tw.div`
  w-278 h-278 rounded-4 bg-black/10 flex-shrink-0 bg-center bg-cover bg-no-repeat relative
`;

const Sample = tw.div`
  absolute absolute-center font-bold text-40 leading-48 text-red/50
`;

const PrimaryContentWrapper = tw.div`
  flex flex-col gap-20 flex-1 justify-between
`;

const NamePropertyWrapper = tw.div`
  flex flex-col gap-16
`;
const NameWrapper = tw.div`
  flex flex-col gap-4
`;

const CollectionName = tw.div`
  text-16 leading-20 font-semibold text-blue
`;
const Name = tw.div`
  text-24 leading-32 font-semibold text-black
`;

const PropertiesOuterWrapper = tw.div`
  flex gap-16
`;
const PropertiesWrapper = tw.div`
  flex flex-col gap-4 flex-1
`;

const PropertyWrapper = tw.div`
  flex gap-2 items-center
`;
const Bullet = tw.div`
  w-24 h-24 flex-center flex-shrink-0
`;
const Property = tw.div`
  flex flex-1 text-14 leading-20 text-black/70
`;

const FeesWrapper = tw.div`
  flex gap-8 py-20 px-12 bg-[#F4F4F4] rounded-4
`;

const FeeWrapper = tw.div`
  flex flex-col gap-8 flex-1
`;

const FeeLabel = tw.div`
  text-14 leading-20 font-medium text-black/70 text-center
`;

const FeeValue = tw.div`
  text-20 leading-30 font-semibold text-black text-center
`;

const SecondartContentWrapper = tw.div`
  flex-center flex-shrink-0 w-200
`;
