import { ButtonHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const BorrowButton = ({ text, ...rest }: Props) => {
  return <Wrapper {...rest}>{text}</Wrapper>;
};

const Wrapper = tw.button`
  flex-center flex-shrink-0 px-16 rounded-4 bg-black h-60
  font-semibold text-16 leading-20 text-white clickable

  hover:bg-black/70
`;
