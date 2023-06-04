import tw from 'twin.macro';

import { Gnb } from '~/components/gnb';

const MainPage = () => {
  return (
    <Wrapper>
      <Gnb />
    </Wrapper>
  );
};

const Wrapper = tw.div``;

export default MainPage;
