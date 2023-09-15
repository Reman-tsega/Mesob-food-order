import React, { useRef, useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import classes from './CheckOut.module.css'


const isEmpty = (input)=> input.trim() === '';
const isCharLength5 = (input)=> input.trim().length === 5;

function CheckOut(props) {
    const nameRef = useRef("")
    const cityRef = useRef("")
    const streetRef = useRef("")
    const postRef = useRef("")

    const [isFormInputValid, setIsFormInputValid] = useState({
        name:true,
        city:true,
        street:true,
        post:true,
    });

    const SubmitHandler =(event)=>{
        event.preventDefault()

        const name = nameRef.current.value
        const city = cityRef.current.value
        const street = streetRef.current.value
        const postCode = postRef.current.value

        const validName = !isEmpty(name)
        const validCity = !isEmpty(city)
        const validStreet = !isEmpty(street)
        const validPostCode = isCharLength5(postCode)

        setIsFormInputValid({
            name:validName,
            city: validCity,
            street : validStreet,
            post : validPostCode
        });

        const formIsValid = validName && validCity && validPostCode && validStreet
        if(!formIsValid){
            return
        }
        const orderData = {
            name: name,
            city: city,
            street : street,
            postCode :postCode
        }
        // setIsFormInputValid({
        // name:false,
        // city:false,
        // street:false,
        // post:false,
        // })
        console.log(orderData,"valid daa")
        props.onOrder(orderData)
        props.order()

    }
  return (
    <div>
         <form onSubmit={SubmitHandler} className={classes.form} >
            <div className={`${classes.control}  ${isFormInputValid.name? '' : classes.invalid}` }>

            <Input ref={nameRef} input={{id:"name",   type:"text",  }} label = "Name" />
            {! isFormInputValid.name && <p> name is empty</p>}
            </div>
            <div className={`${classes.control}  ${isFormInputValid.street? '' : classes.invalid}` }>

            <Input ref={streetRef} input={{id:"street",   type:"text",  }} label = "street" />
            {! isFormInputValid.street && <p> street is empty</p>}
            </div>
            <div className={`${classes.control}  ${isFormInputValid.post? '' : classes.invalid}` }>

            <Input ref={postRef} input={{id:"post",   type:"number",  }} label = "postalcode" />
            {! isFormInputValid.post && <p> postcode is not 5 digit</p>}
            </div>
            <div className={`${classes.control}  ${isFormInputValid.city? '' : classes.invalid}` }>

            <Input ref={cityRef} input={{id:"city",   type:"text",  }} label = "city" />
            {! isFormInputValid.city && <p> city is empty</p>}
            </div>

            <div className={classes.actions}>
            <Button type="submit"  >confirm</Button>
            <Button  onClick={props.order}>cancle</Button>
            </div>
        </form>
    </div>
  )
}

export default CheckOut