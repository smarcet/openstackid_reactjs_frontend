import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux'
import store, {persistor} from './components/store';
import { PersistGate } from 'redux-persist/es/integration/react'

const onBeforeLift = () => {
   console.log("reading state ...")
}

ReactDOM.render(
    <Provider store={store}>

            <PersistGate
                onBeforeLift={onBeforeLift}
                persistor={persistor}>
                <App />
            </PersistGate>
    </Provider>,
    document.querySelector('#root')
);