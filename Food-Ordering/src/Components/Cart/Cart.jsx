import React, { useContext } from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useState } from 'react';
import { CartItemContext } from '../../Store/ContextProvider';
import CartItem from './CartItem';


function Cart(props) {
    const cartctx = useContext(CartItemContext)
    const formatedtotalAmount =  cartctx.totalAmount.toFixed(2)
    const hasItem = cartctx.items.length > 0

    const onAddHandler =( item)=>{
        cartctx.addItem({...item,amount:1});

    }

    const onRemoveHandler  =(id)=>{
        cartctx.removeItem(id);
    }

    const cartItem= <ul className={classes['cart-items']} >{cartctx.items.map(
        (item)=><CartItem key={item.id} 
                        id ={item.id}
                        name={item.name} 
                        price={item.price} 
                        amount={item.amount}
                        onAdd={onAddHandler.bind(null,item)}
                        onRemove={onRemoveHandler.bind(null,item.id)}
                         />)}
    </ul>;

  return (
   <Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
            <span>total amount</span> <br/>
            <span>{formatedtotalAmount}</span>
        </div>
        <div className={classes.action}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            {hasItem && <button className={classes.button}>Order</button>}

        </div>
    </Modal>
  )
}

export default Cart