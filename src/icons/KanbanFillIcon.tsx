import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export function KanbanFillIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
    </SvgIcon>
  );
}
