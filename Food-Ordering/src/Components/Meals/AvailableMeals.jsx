import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MelaItem from './MealItem/MelaItem';

const DummyMeal = [{
    id: 'm1',
    name: 'Kitfo',
    description: 'Guragie tragithional',
    price: 522.99,
  },
  {
    id: 'm2',
    name: 'Zmamojat',
    description: 'Guragie tragithional',
    price: 316.5,
  },
  {
    id: 'm3',
    name: 'Tihlo',
    description: 'tigri tragithional food',
    price: 332.99,
  },
  {
    id: 'm4',
    name: 'Chikoo',
    description: 'Oromo tragithional food',
    price: 18.99,
  },
]

const AvailableMeals = () => {
  const mealsList = DummyMeal.map((meal,i) => <MelaItem 
                    id={meal.id}
                    key={i}
                    name ={meal.name} 
                    description ={meal.description}
                    price={meal.price}
                    />);

  return (
        <Card>
    <section className={classes.meals}>

      <ul>{mealsList}</ul>
    </section>
        </Card>
  );
};

export default AvailableMeals;