import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';
import App from './App.tsx';
import './index.scss';
import { checkCorrectCounter } from './utils/checkCorrectCounter.ts';

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <Provider store={store}>
        <App checkCorrectCounter={checkCorrectCounter} />
    </Provider>
);
