import tw from 'twin.macro';

import { cardData } from '../data';
import { TryCard } from './try-card';

export const TryNow = () => {
  return (
    <Wrapper>
      <Title>Try Now!</Title>
      <CardWrapper>
        {cardData.map(
          ({
            background,
            logo,
            name,
            description,
            utilities,
            depositFeeFloor,
            fixedFeeFloor,
            usageFeeFloor,
          }) => (
            <TryCard
              key={name}
              background={background}
              logo={logo}
              name={name}
              description={description}
              utilities={utilities}
              depositFeeFloor={depositFeeFloor}
              fixedFeeFloor={fixedFeeFloor}
              usageFeeFloor={usageFeeFloor}
            />
          )
        )}
      </CardWrapper>
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
  flex justify-center gap-40
`;
