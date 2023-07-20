import { AppBar } from '@atoms/appBar';
import { useUser } from '@core/store/react-vite-web/user';
import type { BoxProps, SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';

import { appLayoutStyle } from './style';

export interface AppLayoutProps {
  className?: string;
  sx?: SxProps<Theme>;
  childrenWrapperProps?: BoxProps;
  children: JSX.Element;
}

export function AppLayout(props: AppLayoutProps): JSX.Element {
  const { className = '', children, childrenWrapperProps = {}, sx = {}, ...rest } = props;

  const user = useUser((state) => state.user);

  return (
    <Box
      sx={[
        {
          ...appLayoutStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <AppBar user={user} />
      {/* Children */}
      <Box
        sx={[
          {
            ...appLayoutStyle.childrenSx,
          },
          ...(Array.isArray(childrenWrapperProps['sx']) ? childrenWrapperProps['sx'] : [childrenWrapperProps['sx']]),
        ]}
      >
        {children}
      </Box>
    </Box>
  );
}
