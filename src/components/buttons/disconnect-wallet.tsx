import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}
export const DisconnectWalletButton = ({ text, ...rest }: Props) => {
  return <Wrapper {...rest}>{text}</Wrapper>;
};

const Wrapper = tw.div`
  font-semibold text-16 leading-20 text-black/40 clickable underline
`;
