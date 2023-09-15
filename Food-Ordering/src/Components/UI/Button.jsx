import React from 'react'
import classes from './Button.module.css'
function Button(props) {
  return (
    <button className={props.class || classes.button}
            type={props.type || "button"}
            onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default Button