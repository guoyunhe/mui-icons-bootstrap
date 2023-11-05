import type { FC } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const NvmeFill: FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path d="M6 7H5v2h1V7Zm6 0H9v2h3V7Z"/>
  <path d="M2 4a.5.5 0 0 0-.5.5h-1A.5.5 0 0 0 0 5v1a.5.5 0 0 0 .5.5h1a.25.25 0 0 1 0 .5h-1a.5.5 0 0 0-.5.5V11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5.5h13.5a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5.5.5 0 0 1 0-1A.5.5 0 0 0 16 7V4.5a.5.5 0 0 0-.5-.5H2Zm2 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3Zm4 0a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3Z"/>
  </SvgIcon>
);