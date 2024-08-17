import React, { useState, useReducer, useEffect, useContext, useRef, createContext } from 'react';

const Hooks = ['useState', 'useReducer', 'useEffect', 'useContext', 'useRef', 'useMemo', 'useCallback', 'useImperativeHandle', 'useLayoutEffect', 'useDebugValue',
    'useId', 'useInsertionEffect', 'useSyncExternalStore', 'useTransition', 'useDefferedValue'];

const UseStateComopnent = () => {
    const [number, setNumber] = useState(0);
    const increase = () => setNumber(prevNum => prevNum + 1);
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    );
}

const UseReducerComponent = () => {
    const [number, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'INCREASE':
                return state + 1;
            case 'DECREASE':
                return state - 1;
            default:
                return state;
        }
    }, 0);
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'DECREASE' })}>Decrease</button>
        </div>
    );
}

const UseEffectComponent = () => {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const consoleText = useRef('consoleT');

    useEffect(() => { consoleText.current.innerHTML = 'A has changed'; }, [A]);
    useEffect(() => { consoleText.current.innerHTML = 'B has changed'; }, [B]);
    useEffect(() => { consoleText.current.innerHTML = 'Initial Text.'; }, []);
    
    return (
        <div>
            <h2 ref={consoleText} style={{background:"rgb(0,170,0)"}}></h2>
            <h1>A : {A}</h1>
            <button onClick={() => setA(prevNum => prevNum + 1)}>+(A)</button>
            <h1>B : {B}</h1>
            <button onClick={() => setB(prevNum => prevNum + 1)}>+(B)</button>
        </div>
    );
}

const UseContextComponent = () => {
    const ThemeContext = createContext('light');
    const theme = useContext(ThemeContext);
    
    return (
        <div>
            <h1>{theme}</h1>
        </div>
    );
}


const HooksComponents = [<UseStateComopnent />, <UseReducerComponent />, <UseEffectComponent />, <UseContextComponent />];

export {HooksComponents, Hooks, UseStateComopnent, UseReducerComponent, UseEffectComponent, UseContextComponent};