import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";
import styled from "styled-components";

const FormControl = styled.div`
 {
  margin: 0.5rem 0;
}

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? ('red') : ('black')};
} 

& input {
  display: block;
  width: 100%;
  border: 1px solid   ${props => props.invalid ? ('red') : ('#ccc')}; 
  background: ${props => props.invalid ? ('rgb(233, 123, 123)')  :('green')}; 
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

&.input:focus {
  outline: none;
  background: #c8e1e4;
  border-color: #00358b;
}

/*
&.invalid input{
  border-color: red;
  background: rgb(233, 123, 123);
}

&.invalid label{
  color: red;
}
*/
`;



const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");

  const [isInputValid, setIsInputValid] = useState(true);


  const taskInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){     //проверка на введённое значение в input, чтобы венуть предыдущие стили до по окончанию ввода
      setIsInputValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault(); // отменения стандартного действия, те дальнейшего перехода
    //console.log(event.preventDefault());
    if(inputText.trim().length === 0){  // С помощью IF проверяю на введённое значение, если были введены ток пробелы, то всё начнётся занова
      setIsInputValid(false);
      return;
    }

    props.onAddTask(inputText);
  };

  return (
    
    <form onSubmit={formSubmitHandler}>

      {/*<FormControl className={!isInputValid && "invalid" }>*/}
      <FormControl invalid={!isInputValid}> 
        <label >Задачи</label>   {/*style={{color: !isInputValid ? ('red') : ('black')}} */}
        <input 
        
        type="text" onChange={taskInputChangeHandler} />  
      </FormControl>

      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
