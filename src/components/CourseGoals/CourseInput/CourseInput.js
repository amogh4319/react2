import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true);
  const goalInputChangeHandler = event => {
    const inputValue = event.target.value;
    if (inputValue.trim().length > 1) {
      setIsValid(true);
    } else if(inputValue.trim().length===1) {
      setIsValid(false);
    }
    setEnteredValue(inputValue);
  };

 
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };
  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?'invalid':''}`}>
        <label >Course Goal</label>
        <input type="text" 
       
        onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit"
      style={{ background: isValid ? 'red' : 'lightcoral' }}
      >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
