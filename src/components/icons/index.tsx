import { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  color?: string;
}

export const IconBullet = ({ color, ...rest }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <rect x="10" y="10" width="4" height="4" rx="1" fill={color ?? '#252525'} fillOpacity="0.5" />
  </svg>
);

export const IconNoti = ({ color, ...rest }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C16.4183 2 20 5.58172 20 10V14L21 19H16C16 21.2091 14.2091 23 12 23C9.79086 23 8 21.2091 8 19H3L4 14V10C4 5.58172 7.58172 2 12 2ZM12 21C10.8954 21 10 20.1046 10 19H14C14 20.1046 13.1046 21 12 21ZM6.00414 9.77506C6.12243 6.56557 8.7616 4 12 4C15.3137 4 18 6.68629 18 10V14.198L18.56 17H5.439L6 14.198V10L6.00414 9.77506Z"
      fill={color ?? '#252525'}
    />
  </svg>
);
