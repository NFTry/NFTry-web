import tw from 'twin.macro';

export const TryNow = () => {
  return (
    <Wrapper>
      <Title>Try Now!</Title>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col w-full gap-48
`;

const Title = tw.div`
  font-bold text-40 leading-48 text-black text-center
`;

const CardWrapper = tw.div`
  flex gap-40
`;
