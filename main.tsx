import {createRoot} from 'react-dom/client';
import App from '@app/App.tsx';

const deferRender = async () => {
  const {worker} = await import('./mocks/browser');

  return worker.start();
};

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
