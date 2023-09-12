import React, { useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderButton.module.css'
import { useContext } from 'react'
import {CartItemContext} from '../../Store/ContextProvider'


function HeaderButton(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartctx = useContext(CartItemContext)
  const { items } = cartctx;

    const numberOfCartItems = cartctx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount
    },0);

    console.log(numberOfCartItems,"in hn")
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(()=>{
    if (items.length === 0) {
        return;
      }
      setBtnIsHighlighted(true);

      const timer = setTimeout(()=>{
        setBtnIsHighlighted(false)
      },3000)

      return ()=>{

          clearTimeout(timer)
        }

  },[items])
    

  return (
    <button onClick={props.onOpen} className={btnClasses} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderButton