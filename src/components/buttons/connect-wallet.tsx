import { ButtonHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const ConnectWalletButton = ({ text, ...rest }: Props) => {
  return <Wrapper {...rest}>{text}</Wrapper>;
};

const Wrapper = tw.button`
  flex-center flex-shrink-0 px-16 border-1 border-solid border-black rounded-4 h-44
  font-semibold text-16 leading-20 text-black clickable bg-white

  hover:border-black/70 hover:text-black/70
`;
