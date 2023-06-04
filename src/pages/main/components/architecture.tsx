import tw from 'twin.macro';

import architecture from '~/assets/images/architecture.png';

export const Architecture = () => {
  return (
    <Wrapper>
      <ArchitectureImage style={{ backgroundImage: `url(${architecture})` }} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex
`;

const ArchitectureImage = tw.div`
  flex-center w-840 h-480 bg-black/30 bg-center bg-cover bg-no-repeat
`;
