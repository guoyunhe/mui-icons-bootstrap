import type { FC } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const FilterRight: FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
  </SvgIcon>
);
