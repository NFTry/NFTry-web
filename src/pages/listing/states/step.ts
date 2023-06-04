import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '~/states/middleware/logger';
import { LISTING_STEP, ListingNft } from '~/types';

export interface StepState {
  step: LISTING_STEP;
  selected?: ListingNft;
  setStep: (step: LISTING_STEP) => void;
  select: (nft: ListingNft) => void;
}

export const useStepState = create<StepState>()(
  immer(
    logger(set => ({
      name: 'nft-listing-step-store',
      step: LISTING_STEP.STEP_0,
      selected: undefined,
      setStep: (step: LISTING_STEP) => set({ step }),
      select: (nft: ListingNft) => set({ selected: nft }),
    }))
  )
);
