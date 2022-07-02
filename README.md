# mui-icons-bootstrap

Bootstrap icons as MUI SvgIcon components

## Install

```bash
npm install --save mui-icons-bootstrap
```

## Usage

```jsx
import { Button } from '@mui/material';
import { ArrowDownIcon } from 'mui-icons-bootstrap';

function MyApp() {
  return (
    <div>
      <Button>
        Click Me <ArrowDownIcon />
      </Button>
    </div>
  );
}
```

## Explore

See https://icons.getbootstrap.com/

The component name consists of pascal-case of icon name and appended with 'Icon'. For example, the icon `arrow-down` relates to component `ArrowDownIcon`.

For icon names starting with numbers, the component name will start with 'The'. For example, the icon `123` relates to component `The123Icon`.
