import { useReducer } from 'react';


const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'counter1' :
      return { ...state, counter1: state.counter1 + payload }
    case 'counter2' :
      return { ...state, counter2: state.counter2 + payload }
    case 'counter3' :
      return { ...state, counter3: state.counter3 + payload }

    case 'reset1' :
      return { ...state, counter1: 0 }
    case 'reset2' :
      return { ...state, counter2: 0 }
    case 'reset3' :
      return { ...state, counter3: 0 }

    default :
      console.error('Unknown type!');
      return state;
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, { counter1: 0, counter2: 0, counter3: 0 });
  return (
      <div>
        <div>
          <div>Counter1: {state.counter1}</div>
          <button onClick={() => dispatch({ type: 'counter1', payload: 1 })}>Inc</button>
          <button onClick={() => dispatch({ type: 'counter1', payload: -1 })}>Dec</button>
          <button onClick={() => dispatch({ type: 'reset1' })}>Reset</button>
        </div>

        <hr/>

        <div>
          <div>Counter2: {state.counter2}</div>
          <button onClick={() => dispatch({ type: 'counter2', payload: 1 })}>Inc</button>
          <button onClick={() => dispatch({ type: 'counter2', payload: -1 })}>Dec</button>
          <button onClick={() => dispatch({ type: 'reset2' })}>Reset</button>
        </div>

        <hr/>

        <div>
          <div>Counter3: {state.counter3}</div>
          <button onClick={() => dispatch({ type: 'counter3', payload: 1 })}>Inc</button>
          <button onClick={() => dispatch({ type: 'counter3', payload: -1 })}>Dec</button>
          <button onClick={() => dispatch({ type: 'reset3' })}>Reset</button>
        </div>
      </div>
  );
}