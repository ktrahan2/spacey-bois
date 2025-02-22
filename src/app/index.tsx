import {StrictMode, Suspense} from 'react';
import {Provider} from 'react-redux';
import {store} from '@root/store/store';
import {AppRouter} from './router';
import {ErrorBoundary} from 'react-error-boundary';
import {MainErrorFallback} from '@root/components/errors/MainErrorFallback';
import {GlobalStyles, ThemeProvider} from '@mui/material';
import {theme} from '@root/theme';

export const App = () => {
  return (
    <StrictMode>
      <Suspense fallback={<div>Loading....</div>}>
        <ErrorBoundary FallbackComponent={MainErrorFallback}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <GlobalStyles
                styles={{
                  '*': {margin: 0, padding: 0, boxSizing: 'border-box'},
                  'html, body': {
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#070714',
                    minHeight: '100vh',
                  },
                }}
              />
              <AppRouter />
            </ThemeProvider>
          </Provider>
        </ErrorBoundary>
      </Suspense>
    </StrictMode>
  );
};
