import React, { Reducer, ReducerState, useReducer } from 'react';

function CreateDataContext<R extends Reducer<any, any>, S, A extends (dispatch: React.Dispatch<React.ReducerAction<R>>) => any>(
  reducer: R,
  initialState: S & ReducerState<R>,
  actions?: A
) {
  interface ContextData {
    state: typeof initialState;
    actions?: ReturnType<A>;
  }

  const Context = React.createContext<ContextData>({
    state: initialState,
    actions: undefined
  });

  const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const context: ContextData = { state };

    if (actions) {
      context['actions'] = actions(dispatch);
    }

    return <Context.Provider value={context}>{children}</Context.Provider>;
  };

  return { Context, Provider };
}

export default CreateDataContext;
