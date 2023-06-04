import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';

import { Architecture } from './components/architecture';
import { Introduction } from './components/introduction';
import { TryNow } from './components/try-now';

const MainPage = () => {
  return (
    <Wrapper>
      <Gnb />
      <ContentWrapper>
        <Introduction />
        <Architecture />
        <TryNow />
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
    flex flex-col w-full pb-160 pt-264 gap-160 px-80
  `,
  css`
    min-height: calc(100vh - 128px);
  `,
]);

export default MainPage;
