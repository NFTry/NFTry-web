import tw from 'twin.macro';

import { ListingNft } from '~/types';

import { NFTsCard } from '../components/nft-card';
import { nftData } from '../data';
import { useNFTListingStep } from '../hooks/use-listing-step';
import { useStepState } from '../states/step';

export const NFTListingStep0 = () => {
  const { select } = useStepState();
  const { goNext } = useNFTListingStep();

  const handleClick = (data: ListingNft) => {
    select(data);
    goNext();
  };

  return (
    <Wrapper>
      {nftData.map(({ image, collectionName, name, contractAddress, tokenId, properties }) => (
        <NFTsCard
          key={tokenId}
          image={image}
          collectionName={collectionName}
          name={name}
          tokenId={tokenId}
          properties={properties}
          onClick={() => handleClick({ collectionName, name, tokenId, contractAddress })}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex gap-40 justify-center
`;
