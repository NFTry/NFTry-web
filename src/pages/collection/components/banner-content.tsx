import { useParams } from 'react-router-dom';
import tw from 'twin.macro';

import { IconBullet } from '~/components/icons';

import { collectionData } from '../data';

export const BannerContent = () => {
  const { id } = useParams();

  const collection = collectionData.find(({ contractAddress }) => contractAddress === id);

  return (
    <Wrapper>
      <Title>{collection?.name}</Title>
      <Description>{collection?.description}</Description>
      <UtilitiesWrapper>
        {collection?.utilities?.map(utility => (
          <UtilityWrapper key={utility}>
            <Bullet>
              <IconBullet width={24} height={24} />
            </Bullet>
            <Utility>{utility}</Utility>
          </UtilityWrapper>
        ))}
      </UtilitiesWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-16
`;

const Title = tw.div`
  font-bold text-40 leading-48 text-black
`;

const Description = tw.div`
  font-medium text-20 leading-30 text-black whitespace-pre-wrap
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
  flex flex-1 text-16 leading-22 text-black/70
`;
