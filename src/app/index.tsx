import {StrictMode, Suspense} from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {AppRouter} from './router';
import {ErrorBoundary} from 'react-error-boundary';
import {MainErrorFallback} from '@root/components/errors/MainErrorFallback';

export const App = () => {
  return (
    <StrictMode>
      <Suspense fallback={<div>Loading....</div>}>
        <ErrorBoundary FallbackComponent={MainErrorFallback}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </ErrorBoundary>
      </Suspense>
    </StrictMode>
  );
};
