import type { FC } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const EmojiGrinFill: FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.488 7c-.23-.598-.661-1-1.155-1-.493 0-.924.402-1.155 1A2.794 2.794 0 0 1 4 6c0-1.105.597-2 1.333-2 .737 0 1.334.895 1.334 2 0 .364-.065.706-.179 1Zm5.334 0c-.23-.598-.662-1-1.155-1-.494 0-.925.402-1.155 1a2.793 2.793 0 0 1-.179-1c0-1.105.597-2 1.334-2C11.403 4 12 4.895 12 6c0 .364-.065.706-.178 1ZM2.696 8.756a.48.48 0 0 1 .382-.118C4.348 8.786 6.448 9 8 9c1.553 0 3.653-.214 4.922-.362a.48.48 0 0 1 .383.118.3.3 0 0 1 .096.29c-.09.47-.242.921-.445 1.342-.263.035-.576.075-.929.115A36.798 36.798 0 0 1 8 10.75c-1.475 0-2.934-.123-4.027-.247-.353-.04-.666-.08-.93-.115A5.457 5.457 0 0 1 2.6 9.045a.3.3 0 0 1 .097-.29ZM8 13.5a5.49 5.49 0 0 1-4.256-2.017l.116.014c1.115.126 2.615.253 4.14.253 1.525 0 3.025-.127 4.14-.253l.117-.014A5.49 5.49 0 0 1 8 13.5Z"/>
  </SvgIcon>
);
