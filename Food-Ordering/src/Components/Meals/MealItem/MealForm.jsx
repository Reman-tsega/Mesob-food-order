import React, { isValidElement, useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealForm.module.css'

function MealForm(props) {
    const itemAmountRef = useRef(0)
    const [amountisvalid,setAmountisvalid] = useState(true);


    const SubmitHandler =(e)=>{
        e.preventDefault()
        const itemAmount = itemAmountRef.current.value; // string value
        const itemAmountNum = +itemAmount // cast to num
        if (itemAmountNum.length===0 || itemAmountNum<1 || itemAmountNum>5){
            setAmountisvalid(false);
          return;
        }
        else{
          setAmountisvalid(true);
  
        }
        props.onAddItem(itemAmountNum)
    }

  return (
    <form className={classes.form} onSubmit={(e)=>SubmitHandler(e)} >
            <Input label="Amount"
            ref={itemAmountRef}
             input={{
                id:'amount',
                type:"number",
                min:'1',
                max:'6',
                step:'1',
                defaultValue:'1'
            }} />
            <button disabled={!amountisvalid} type='submit'>+ Add</button>
            {!amountisvalid && <p>please enter proper amount</p> }
    </form>
  )
}

export default MealForm