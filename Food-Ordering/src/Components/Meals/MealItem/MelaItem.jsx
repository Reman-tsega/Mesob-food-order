import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealForm from './MealForm'
import { CartItemContext } from '../../../Store/ContextProvider';


function MelaItem(props) {
    const ctx = useContext(CartItemContext)
    const price = `$${props.price.toFixed(2)}`;

    const AddItemHandler = (amount)=>{
        ctx.addItem({
            id:props.id,
            name:props.name,
            description:props.description,
            price:props.price,
            amount:amount
        })

    }
  return (
      <li className={classes.meal}>
        <div>

        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <span className={classes.price} >{price}</span>
    </div>
    <div>

        <MealForm onAddItem ={AddItemHandler}  />
    </div>
    </li>
  )
}

export default MelaItem