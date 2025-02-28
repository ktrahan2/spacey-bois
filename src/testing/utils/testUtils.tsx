import React, {PropsWithChildren} from 'react';
import {render} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {Provider} from 'react-redux';
import {AppStore, RootState, setupStore} from '@root/store';
import {MemoryRouter} from 'react-router-dom';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
  route?: string;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    route = '/',
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({children}: PropsWithChildren) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    </Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, {wrapper: Wrapper, ...renderOptions}),
  };
}
