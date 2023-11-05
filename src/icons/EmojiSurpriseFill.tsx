import type { FC } from 'react';
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const EmojiSurpriseFill: FC<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7 5.5C7 4.672 6.552 4 6 4s-1 .672-1 1.5S5.448 7 6 7s1-.672 1-1.5Zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 7 10 7s1-.672 1-1.5ZM8 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  </SvgIcon>
);
