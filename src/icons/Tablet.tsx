import type { FC } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const Tablet: FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </SvgIcon>
);