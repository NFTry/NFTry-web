import tw from 'twin.macro';

import { Logo } from '../logo';

export const Gnb = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo width={109} height={24} />
      </LogoWrapper>
      <ButtonWrapper></ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-104 items-center justify-between px-24
`;

const LogoWrapper = tw.div`
  w-109 h-24 flex-center flex-shrink-0
`;

const ButtonWrapper = tw.div``;
