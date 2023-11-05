import type { FC } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const HCircleFill: FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5-3.998H9.67v3.322H6.33V4.002H5V12h1.33V8.455h3.34V12H11V4.002Z"/>
  </SvgIcon>
);
