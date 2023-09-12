import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';

function Header(props) {
  
  return (
    <>
    <header className={classes.header}>
        <h1>Mesob Meals</h1>
        <HeaderButton onOpen ={props.onOpen}/>
    </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  )
}

export default Header