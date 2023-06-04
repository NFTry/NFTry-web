import { InputHTMLAttributes } from 'react';
import { NumericFormat } from 'react-number-format';
import tw, { css, styled } from 'twin.macro';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  caption?: string;
  label?: string;
  handleChange?: (value?: number) => void;
}

export const Input = ({ title, caption, label, handleChange }: Props) => {
  return (
    <Wrapper>
      {title && <InputTitle>{title}</InputTitle>}
      <InputOuterWrapper>
        <InputWrapper>
          <NumericFormat
            placeholder="0"
            thousandSeparator={true}
            allowLeadingZeros={false}
            allowNegative={false}
            decimalScale={4}
            onValueChange={values => handleChange?.(values.floatValue)}
          />
          {label && <InputLabel>{label}</InputLabel>}
        </InputWrapper>
        <Underline />
      </InputOuterWrapper>

      {caption && <InputCaption>{caption}</InputCaption>}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-4 py-16 px-24 bg-[#F4F4F4]
`;

const InputTitle = tw.div`
  font-medium text-14 leading-20 text-black
`;

const InputCaption = tw.div`
  text-14 leading-20 text-black/70
`;

const InputOuterWrapper = tw.div`
  flex flex-col gap-4
`;

const Underline = tw.div`
  w-full h-1 bg-[#d9d9d9] flex-shrink-0
`;

const InputWrapper = styled.div(() => [
  tw`
    w-full flex items-center gap-4
  `,
  css`
    & > input {
      width: 100%;
      height: 30px;
      display: flex;
      flex-grow: 1;
      background-color: transparent;
      padding: 0;

      font-size: 20px;
      line-height: 30px;
      font-weight: 400;

      border: none;
      outline: none;

      &:placeholder {
        color: rgba(37, 37, 37, 0.4);
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  `,
]);

const InputLabel = tw.div`
  text-20 leading-30 text-black/40
`;
