import React, { useState, useReducer, useEffect, useContext, useRef, createContext, useMemo } from 'react';

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
            <h2 ref={consoleText}></h2>
            <h1>A : {A}</h1>
            <button onClick={() => setA(prevNum => prevNum + 1)}>+(A)</button>
            <h1>B : {B}</h1>
            <button onClick={() => setB(prevNum => prevNum + 1)}>+(B)</button>
        </div>
    );
}

const UseContextComponent = () => {
    const ThemeContext = createContext();
  
    const ThemedButton = () => {
      const theme = useContext(ThemeContext)[0];
      return (
        <button 
          style={{ 
            background: theme === 'dark' ? '#333' : '#FFF', 
            color: theme === 'dark' ? '#FFF' : '#000', 
            marginRight: '10px' 
          }}
        >
          {theme} Theme
        </button>
      );
    };
  
    const ThemeToggleButton = () => {
      const [theme, setTheme] = useContext(ThemeContext);
      return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle Theme
        </button>
      );
    };
  
    const themeState = useState('light');
  
    return (
      <ThemeContext.Provider value={themeState}>
        <div>
          <ThemeToggleButton />
          <ThemeToggleButton />
          <div>
            <ThemedButton />
          </div>
        </div>
      </ThemeContext.Provider>
    );
}

const UseMemoComponent = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(0);
    const [any, setAny] = useState(0);
    const consoleText = useRef('Console Text');

    const computeExpensiveValue = (a, b) => {
        console.log('Expensive Value has been computed.');
        return a ** b;
    };

    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

    return (
        <div>
            <h1>{a}^{b} = {memoizedValue}</h1>
            <button onClick={() => setA(prevNum => prevNum + 1)}>+(A)</button>
            <button onClick={() => setB(prevNum => prevNum + 1)}>+(B)</button>
            <button onClick={() => setAny(prevNum => prevNum + 1)}>Rerender</button>
            <h6 style={{opacity: 1}}>Any : {any}</h6>
        </div>
    );
}

const UseCallbackComponent = () => {
    return (
        <div>
            <h1>useCallback</h1>
            <h3>Coming Soon...</h3>
        </div>
    );
}

const UseRefComponent = () => {
    const [a, setA] = useState(0);
    const b = useRef(0);

    return (
        <div>
            <h4>A is state, B is ref.</h4>
            <h1>A : {a}</h1>
            <button onClick={() => setA(prevNum => prevNum + 1)}>+(A)</button>
            <h1>B : {b.current}</h1>
            <button onClick={() => b.current++}>+(B)</button>
        </div>
    );
}

const UseLayoutEffectComponent = () => {
    const [color1, setColor1] = useState('red');
    const [color2, setColor2] = useState('blue');

    useEffect(() => {
        document.getElementById('hi').style.color = color1;
    }, [color1]);
    useLayoutEffect(() => {
        document.getElementById('hi').style.color = color2;
    }, [color2]);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div id="hi">
            <h1>useLayoutEffect</h1>
            <button onClick={() => setColor1(getRandomColor())}>Change Color (useEffect)</button>
            <button onClick={() => setColor2(getRandomColor())}>Change Color (useLayoutEffect)</button>
        </div>
    );
}

const HooksComponents = [<UseStateComopnent />, <UseReducerComponent />, <UseEffectComponent />, <UseContextComponent />, <UseMemoComponent />, <UseCallbackComponent />, <UseRefComponent />, <UseLayoutEffectComponent />];

export {HooksComponents, Hooks, UseStateComopnent, UseReducerComponent, UseEffectComponent, UseContextComponent, UseMemoComponent, UseCallbackComponent, UseRefComponent, UseLayoutEffectComponent};