import tw from 'twin.macro';

import { Logo } from '../logo';

export const Footer = () => {
  return (
    <Wrapper>
      <Logo width={73} height={16} color="#3F3F3F" />
      <Text>© 2023 NFTry, Inc. All Rights Reserved</Text>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-128 flex flex-col flex-center gap-12 flex-shrink-0
`;

const Text = tw.div`
  text-14 leading-20 text-center text-black/80
`;
