import { useBottomSheetStore } from '~/states/components/bottom-sheet';

export const useBottomSheet = (id?: string) => {
  const { opened: _opened, open, close, toggle, reset } = useBottomSheetStore();

  const opened = id ? _opened.find(i => i === id) : false;

  return {
    opened,
    open: () => open(id),
    close: () => close(id),
    toggle: () => toggle(id),
    reset,
  };
};
