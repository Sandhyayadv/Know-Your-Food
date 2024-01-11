import React from 'react'
import './Calories.css'
const Nutrition = ({quantity,unit,food,weight,calories}) => {
  
  return (
<>

<div className='Categories'>
       <p>{quantity}</p>
        <p>{unit}</p>
        <p>{food}</p>
        <p>{weight} g</p>
        <p>{calories} kcal</p>       
        </div>
    </>
  )
}

export default Nutrition
