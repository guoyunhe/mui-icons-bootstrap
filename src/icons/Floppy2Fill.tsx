import type { FC } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const Floppy2Fill: FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path d="M12 2h-2v3h2V2Z"/>
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2.914a1.5 1.5 0 0 0-.44-1.06L14.147.439A1.5 1.5 0 0 0 13.086 0H1.5ZM4 6a1 1 0 0 1-1-1V1h10v4a1 1 0 0 1-1 1H4ZM3 9h10a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1Z"/>
  </SvgIcon>
);
