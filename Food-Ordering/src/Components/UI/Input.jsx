import React, { forwardRef } from 'react'
import classes from './Input.module.css'

const Input= React.forwardRef((props,ref)=> {
  return (
    <div className={classes.input}>
    <label htmlFor={props.input.id}> {props.label}</label>
      <input 
      ref ={ref}
      id = {props.input.id}
    //   type={props.type} 
    //   value={props.value} 
    //   onChange={props.onChange} 
    //   onBlur={props.onBlur}
    {...props.input} // put the all atributes inside input object and we can adopt all properties using spread property
        />

    </div>
  )
});

export default Input
