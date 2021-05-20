import React from 'react'
import '../index.css'

const Checkbox = ({option, isChecked = false, setIsChecked}) => {    
    return (
      <div className="add-padding">
        <input type="checkbox" name={option} value={option} onChange={setIsChecked} checked={isChecked}/>
        <label htmlFor={option}>{option}</label>
      </div>
    );
}

export default Checkbox
