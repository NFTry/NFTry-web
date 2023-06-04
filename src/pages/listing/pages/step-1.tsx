import { useEffect, useState } from 'react';
import tw from 'twin.macro';

import { ListingNowButton } from '~/components/buttons/listing-now';
import { IconBullet } from '~/components/icons';
import { LISTING_STEP } from '~/types';

import { Input } from '../components/input';
import { nftData } from '../data';
import { useNFTListingStep } from '../hooks/use-listing-step';
import { useStepState } from '../states/step';

export const NFTListingStep1 = () => {
  const [deposit, setDeposit] = useState<number | undefined>(0);
  const [fixedFee, setFixedFee] = useState<number | undefined>(0);
  const [usageFee, setUsageFee] = useState<number | undefined>(0);

  const { selected } = useStepState();
  const { setStep } = useNFTListingStep();

  const selectedNft = nftData.find(
    ({ contractAddress, tokenId }) =>
      contractAddress === selected?.contractAddress && tokenId === selected?.tokenId
  );

  const canListing = deposit && fixedFee && usageFee;
  const handleListing = () => {
    if (!deposit || !fixedFee || !usageFee) return;

    console.log(deposit, fixedFee, usageFee);
    // TODO: connect api
  };

  useEffect(() => {
    return () => setStep(LISTING_STEP.STEP_0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <ImageWrapper style={{ backgroundImage: `url(${selectedNft?.image})` }} />
      <ContentWrapper>
        <NamePropertyWrapper>
          <NameWrapper>
            <CollectionName>{selectedNft?.collectionName}</CollectionName>
            <Name>{`${selectedNft?.name} #${selectedNft?.tokenId}`}</Name>
          </NameWrapper>

          <PropertiesWrapper>
            {selectedNft?.properties.map(property => (
              <PropertyWrapper key={property}>
                <Bullet>
                  <IconBullet width={24} height={24} />
                </Bullet>
                <Property>{property}</Property>
              </PropertyWrapper>
            ))}
          </PropertiesWrapper>
        </NamePropertyWrapper>
        <InputWrapper>
          <Input
            title="Deposit"
            caption="Avg. 100 USDC"
            label="USDC"
            handleChange={data => setDeposit(data)}
          />
          <Input
            title="Fixed Fee"
            caption="Avg. 100 USDC"
            label="USDC"
            handleChange={data => setFixedFee(data)}
          />
          <Input
            title="Usage Fee"
            caption="Avg. 100 USDC"
            label="USDC"
            handleChange={data => setUsageFee(data)}
          />
        </InputWrapper>
        <ListingNowButton text="Listing now" disabled={!canListing} onClick={handleListing} />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex gap-40 justify-center
`;

const ImageWrapper = tw.div`
  w-400 h-400 rounded-4 bg-black/10 flex-shrink-0 bg-center bg-cover bg-no-repeat relative
`;

const ContentWrapper = tw.div`
  flex flex-col gap-40 w-400
`;

const NamePropertyWrapper = tw.div`
  flex flex-col gap-16
`;
const NameWrapper = tw.div`
  flex flex-col gap-4
`;

const CollectionName = tw.div`
  text-16 leading-20 font-semibold text-blue
`;
const Name = tw.div`
  text-24 leading-32 font-semibold text-black
`;

const PropertiesWrapper = tw.div`
  flex flex-col gap-4 flex-1
`;

const PropertyWrapper = tw.div`
  flex gap-2 items-center
`;
const Bullet = tw.div`
  w-24 h-24 flex-center flex-shrink-0
`;
const Property = tw.div`
  flex flex-1 text-14 leading-20 text-black/70
`;

const InputWrapper = tw.div`
  flex flex-col gap-16
`;
