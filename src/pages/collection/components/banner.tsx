import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

import { collectionData } from '../data';

export const Banner = () => {
  const { id } = useParams();

  const collection = collectionData.find(({ contractAddress }) => contractAddress === id);

  return (
    <Wrapper>
      <Background style={{ backgroundImage: `url(${collection?.background})` }} />
      <InnerWrapper>
        <LogoWrapper>
          <Logo style={{ backgroundImage: `url(${collection?.logo})` }} />
        </LogoWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-536 mt-104 relative
`;

const InnerWrapper = tw.div`
  w-full max-w-1440 absolute top-0 absolute-center-x h-full
`;

const Background = tw.div`
  w-full h-480 bg-cover bg-center bg-no-repeat
`;

const LogoWrapper = styled.div(() => [
  tw`
    absolute bottom-0 left-80 p-8 w-176 h-176 bg-white rounded-full flex flex-center
  `,
  css`
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.2);
  `,
]);

const Logo = tw.div`
  w-160 h-160 bg-cover bg-center bg-no-repeat rounded-full
`;
