import { LISTING_STEP } from '~/types';

import { useStepState } from '../states/step';

export const useNFTListingStep = () => {
  const { step, setStep } = useStepState();

  const getPrev = () => {
    if (step === LISTING_STEP.STEP_0) return LISTING_STEP.STEP_0;
    if (step === LISTING_STEP.STEP_1) return LISTING_STEP.STEP_0;
    return LISTING_STEP.STEP_0;
  };

  const getNext = () => {
    if (step === LISTING_STEP.STEP_0) return LISTING_STEP.STEP_1;
    if (step === LISTING_STEP.STEP_1) return LISTING_STEP.STEP_1;
    return LISTING_STEP.STEP_1;
  };

  const goPrev = () => {
    const prev = getPrev();
    setStep(prev);
  };

  const goNext = () => {
    const next = getNext();
    setStep(next);
  };

  return {
    step,
    setStep,
    getPrev,
    getNext,
    goPrev,
    goNext,
  };
};
