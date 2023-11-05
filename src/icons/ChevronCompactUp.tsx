import type { FC } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const ChevronCompactUp: FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
  </SvgIcon>
);
