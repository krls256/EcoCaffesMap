import React from 'react';
import Application from './components/app';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducer from './reducers';

const App: () => React$Node = () => {
  return (
    <Provider store={createStore(reducer)}>
      <Application />
    </Provider>
  )
};

export default App;
