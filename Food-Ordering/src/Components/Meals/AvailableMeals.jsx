import React, { useEffect, useMemo, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MelaItem from './MealItem/MelaItem';
import axios from 'axios'

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
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const [meal, setMeal] = useState([])
  useEffect( ()=>{

    setIsLoading(true)
    const fetchData = async ()=>{

    await  axios.get("https://foodorder-5fdfd-default-rtdb.firebaseio.com/meals.json")
    .then((response)=>{
      console.log(response,"axios")
      const loadedData = []
      const data = response.data
      for (const key in data){
        loadedData.push({
          id:key,
          name:data[key].name,
          price: data[key].price,
          desc: data[key].description,
        })
      }
      setMeal(loadedData)
      setIsLoading(false)
    })
    .catch(err=>{
      console.log(err)
      if(err){
        setErrors(err.message)
      }
    })
  }
  fetchData();

  },[])

  const mealsList = meal.map((meal,i) => <MelaItem 
                    id={meal.id}
                    key={i}
                    name ={meal.name} 
                    description ={meal.desc}
                    price={meal.price}
                    />);

  return (
        <Card>
    <section className={classes.meals}>
      {errors  && <p>{errors}</p>}
      {isLoading  && <p>loading...</p>}
      <ul>{!isLoading  && mealsList}</ul>
    </section>
        </Card>
  );
};

export default AvailableMeals;