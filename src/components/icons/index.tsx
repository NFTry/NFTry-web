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

export const IconBack = ({ color, ...rest }: IconProps) => (
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
      d="M7.01774 12.2591C6.95785 11.9447 7.04957 11.6072 7.29289 11.3639C7.29511 11.3617 7.29734 11.3595 7.29958 11.3573L14.364 4.29289C14.7545 3.90237 15.3877 3.90237 15.7782 4.29289C16.1687 4.68342 16.1687 5.31658 15.7782 5.70711L9.41424 12.071L15.7782 18.435C16.1687 18.8255 16.1687 19.4587 15.7782 19.8492C15.3877 20.2397 14.7545 20.2397 14.364 19.8492L7.29841 12.7836C7.29657 12.7818 7.29473 12.78 7.2929 12.7782C7.14569 12.631 7.05397 12.4493 7.01774 12.2591Z"
      fill={color ?? '#252525'}
    />
  </svg>
);
