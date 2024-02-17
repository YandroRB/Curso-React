import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import './calculator.css'

const Calculator = props => {
  let [resultado,setResultado]= useState("");
  
  const establecerOperacion=(valor)=>{
    if (valor == "."&& resultado !='') establecerFloat(valor);
    else if(resultado=='' && '+-/*.'.includes(valor)){
        setResultado(resultado='0'+valor);
    }
    else if('+-/*.'.includes(valor)&& '+-/*.'.includes(resultado[resultado.length-1])){
        let nuevoSigno=resultado.slice(0,resultado.length-1);
        nuevoSigno=nuevoSigno+valor;
        setResultado(resultado=nuevoSigno);
    }
    else{
        setResultado(resultado+=valor);
    } 
  }
  const establecerFloat=(valor)=>{
    if('+-/*.'.includes(resultado[resultado.length-1])) return;
    let temporal=resultado+valor;
    const numeros=temporal.match(/(?:[+\-*/])?(\d+(\.\d+)?)/g);
    if(!numeros[numeros.length-1].includes('.')) {
      setResultado(resultado+=valor);
    } 
    
  }

  const limpiar=()=>{
    setResultado("");
  }
  const backSpace=()=>{
    setResultado(resultado.slice(0,-1))
  }
  const calcular=()=>{
    if(resultado=="") return;
    if('+-/*.'.includes(resultado[resultado.length-1])){
      setResultado(resultado=resultado.slice(0,-1));
    }
    try {
      setResultado(eval(resultado).toString());
    } catch (error) {
      setResultado(error)
      console.log(error)
    }

  }

  return (
    <div className="container">
      <form >
        <input type="text" value={resultado} name="entrada" disabled/>
      </form>
      <div className="keypad">
        <Button click={limpiar} tecla={'Clear'} notName={true} />
        <Button click={backSpace} tecla={'C'} notName={true} />
        <Button click={establecerOperacion} tecla={'÷'}  altName={'/'}/>
        <Button click={establecerOperacion} tecla={'7'}  />
        <Button click={establecerOperacion} tecla={'8'}  />
        <Button click={establecerOperacion} tecla={'9'}  />
        <Button click={establecerOperacion} tecla={'×'} altName={'*'} />
        <Button click={establecerOperacion} tecla={'4'}  />
        <Button click={establecerOperacion} tecla={'5'}  />
        <Button click={establecerOperacion} tecla={'6'}  />
        <Button click={establecerOperacion} tecla={'-'}  />
        <Button click={establecerOperacion} tecla={'1'}  />
        <Button click={establecerOperacion} tecla={'2'}  />
        <Button click={establecerOperacion} tecla={'3'}  />
        <Button click={establecerOperacion} tecla={'+'}  />
        <Button click={establecerOperacion} tecla={'0'}  />
        <Button click={establecerOperacion} tecla={'.'}  />
        <Button click={calcular} tecla={'='} notName={true}  />
        
      </div>
    </div>
  )
}

Calculator.propTypes = {}

export default Calculator