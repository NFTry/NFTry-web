import { HTMLAttributes } from 'react';
import tw, { css, styled } from 'twin.macro';

import { IconBullet } from '~/components/icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;

  collectionName: string;

  name: string;
  tokenId: string;

  properties: string[];
}

export const NFTsCard = ({
  image,
  collectionName,
  name,
  tokenId,
  properties,

  ...rest
}: Props) => {
  return (
    <Wrapper {...rest}>
      <ImageWrapper style={{ backgroundImage: `url(${image})` }} />
      <ContentWrapper>
        <NameWrapper>
          <CollectionName>{collectionName}</CollectionName>
          <Name>{`${name} #${tokenId}`}</Name>
        </NameWrapper>

        <PropertiesWrapper>
          {properties.map(property => (
            <PropertyWrapper key={property}>
              <Bullet>
                <IconBullet width={24} height={24} />
              </Bullet>
              <Property>{property}</Property>
            </PropertyWrapper>
          ))}
        </PropertiesWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => [
  tw`
    w-290 flex flex-col bg-white rounded-8 clickable
  `,
  css`
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
    font-variant-ligatures: no-contextual;

    &:hover {
      box-shadow: 0px 4px 40px rgba(46, 92, 255, 0.4);
    }
  `,
]);

const ImageWrapper = tw.div`
  w-full h-290 rounded-4 bg-black/10 flex-shrink-0 bg-center bg-cover bg-no-repeat relative
`;

const ContentWrapper = tw.div`
  flex flex-col gap-16 p-24
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
