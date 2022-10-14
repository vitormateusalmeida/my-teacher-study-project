import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { Header } from '../src/components/organisms/shared/header';
import DefaultTheme from '../src/themes/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={DefaultTheme}>
    <Header />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
