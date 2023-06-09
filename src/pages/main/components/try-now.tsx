import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { tryNowData } from '../data';
import { TryCard } from './try-card';

export const TryNow = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Try Now!</Title>
      <CardWrapper>
        {tryNowData.map(
          ({
            background,
            logo,
            name,
            description,
            utilities,
            depositFeeFloor,
            fixedFeeFloor,
            usageFeeFloor,
            contractAddress,
            disabled,
          }) => (
            <TryCard
              key={name}
              onClick={() => navigate(`/${contractAddress}`)}
              background={background}
              logo={logo}
              name={name}
              description={description}
              utilities={utilities}
              depositFeeFloor={depositFeeFloor}
              fixedFeeFloor={fixedFeeFloor}
              usageFeeFloor={usageFeeFloor}
              disabled={disabled}
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
