import {applyMiddleware, createStore, compose} from 'redux';
import reducers from 'Redux/reducers';
import {instrument} from 'App/Devtools';
import {routerMiddleware} from 'react-router-redux';

export default function configStore(initialState, history) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      ),
      instrument()
    )
  );

  if(module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
}
