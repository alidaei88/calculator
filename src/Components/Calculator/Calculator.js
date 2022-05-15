import { useEffect, useState } from 'react';
import './Calculator.css';

const Calculator = () => {

    const [exp, setExp] = useState("");
    const [result, setResult] = useState(0)

    const handleClick = (e) => {
        
        const value = e.target.innerHTML
        setExp(prev => prev.concat(value));
    }

    const handleBackSpace = () => {
        setExp(prev => prev.slice(0, -1));
    }

    const handleClear = () => {
        setExp("");
        setResult(0);
    }

    const handleEqualClick = () => {
        // eslint-disable-next-line no-eval
        const res = eval(exp).toString();
        setResult(res);

    }


    return ( 
        <div className="container">
            <div className="display">
                <div className="result">Result: { result }</div>
                <div className="expression">Exp: { exp }</div>
            </div>
            <div className="keypad">
                <button onClick={handleClick} className="oprator">(</button> 
                <button onClick={handleClear} className="oprator">CE</button> 
                <button onClick={handleClick} className="oprator">)</button> 
                <button onClick={handleBackSpace} className="oprator">C</button> 
                <button onClick={handleClick} >1</button> 
                <button onClick={handleClick}>2</button> 
                <button onClick={handleClick}>3</button> 
                <button onClick={handleClick} className="oprator">+</button> 
                <button onClick={handleClick}>4</button> 
                <button onClick={handleClick}>5</button> 
                <button onClick={handleClick}>6</button> 
                <button onClick={handleClick} className="oprator">-</button> 
                <button onClick={handleClick}>7</button> 
                <button onClick={handleClick}>8</button> 
                <button onClick={handleClick}>9</button> 
                <button onClick={handleClick} className="oprator">*</button> 
                <button onClick={handleClick} className="oprator">.</button> 
                <button onClick={handleClick}>0</button> 
                <button onClick={handleEqualClick} className="equal">=</button> 
                <button onClick={handleClick} className="oprator">÷</button> 
            </div>
           
        </div>
     );
}
 
export default Calculator;