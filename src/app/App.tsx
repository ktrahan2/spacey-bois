import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {BrowserRouter, Routes} from 'react-router-dom';
// import {ROUTES} from '@root/types/constants';

export const App = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </StrictMode>
    )
}