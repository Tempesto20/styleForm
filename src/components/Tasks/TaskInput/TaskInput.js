import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");

  const [isInputValid, setIsInputValid] = useState(true);


  const taskInputChangeHandler = (event) => {
    if(event.target.valut > 0){     //проверка на введённое значение в input, чтобы венуть предыдущие стили до по окончанию ввода
      setInputText(true);
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
      <div className={` form-control ${!isInputValid ? 'invalid' : '' }  ` }>
        <label >Задачи</label>   {/*style={{color: !isInputValid ? ('red') : ('black')}} */}
        <input 
        
        type="text" onChange={taskInputChangeHandler} />  {/*style={{borderColor: !isInputValid ? ('red') : ('green'), background: !isInputValid ? ('salmon') : ('transparent') }} */}
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
