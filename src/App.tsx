import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Outlet} from 'react-router';

export const App = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <main><Outlet/></main>
            </Provider>
        </StrictMode>
    )
}