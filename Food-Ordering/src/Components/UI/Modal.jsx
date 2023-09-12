import React, { useContext } from 'react'
import ReactDOM  from 'react-dom'
import classes from './Modal.module.css'
// import Store from '../Context/ContextProvider'

const BackDrop=(props)=>{
// const {dispatch} = useContext(Store);
// const closeHandler =()=>{
    // dispatch({type:'CLOSE'})
// }
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const Overlay =(props)=>{
    return(
        <div className={classes.modal}>
        <div className={classes.content}>
        {props.children}
        {/* { typeof  props.children === 'function'? props.children():props.children} */}
        </div>
        </div>
    )
}

function Modal(props) {
  return (
    <>

    {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, document.getElementById('overlay'))}

    {ReactDOM.createPortal(
        <Overlay> {props.children} </Overlay>,
        document.getElementById('overlay'))}
    </>
  )
}

export default Modal