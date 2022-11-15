import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'fs';
import { pascalCase, pascalCaseTransformMerge } from 'pascal-case';
import { join } from 'path';

const iconsRoot = './node_modules/bootstrap-icons/icons';

const files = readdirSync(iconsRoot);

const svgIconPackageJsonPath =
  'node_modules/@mui/material/SvgIcon/package.json';
if (existsSync(svgIconPackageJsonPath)) {
  rmSync(svgIconPackageJsonPath);
}

if (existsSync('./src')) {
  rmSync('./src', { recursive: true, force: true });
}
mkdirSync('./src');
mkdirSync('./src/icons');

let indexContent = '';

files.forEach((file) => {
  if (!file.endsWith('.svg')) return;
  const iconName = file.substring(0, file.length - 4);
  const componentName = pascalCase(iconName, {
    transform: pascalCaseTransformMerge,
  });
  const safeComponentName = /^\d+/.test(componentName)
    ? 'The' + componentName
    : componentName;
  const filePath = join(iconsRoot, file);
  const fileContent = readFileSync(filePath, 'utf-8');
  const svgInnerContent = fileContent
    .substring(fileContent.indexOf('>') + 1, fileContent.indexOf('</svg>'))
    .trim()
    .replace('fill-rule=', 'fillRule=');
  const componentContent = `import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export function ${safeComponentName}(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      ${svgInnerContent}
    </SvgIcon>
  );
}
`;
  writeFileSync('./src/icons/' + safeComponentName + '.tsx', componentContent);
  indexContent += `export * from './icons/${safeComponentName}';\n`;
});

writeFileSync('./src/index.ts', indexContent);
