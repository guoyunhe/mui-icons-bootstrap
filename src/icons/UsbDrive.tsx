import type { FC } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const UsbDrive: FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6v-4ZM7 1v1h1V1H7Zm2 0v1h1V1H9ZM6 5a1 1 0 0 0-1 1v8.5A1.5 1.5 0 0 0 6.5 16h4a1.5 1.5 0 0 0 1.5-1.5V6a1 1 0 0 0-1-1H6Zm0 1h5v8.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V6Z"/>
  </SvgIcon>
);
