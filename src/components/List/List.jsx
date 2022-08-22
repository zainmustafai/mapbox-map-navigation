import React from 'react'

const List = () => {
  return (
    <div >
        <form className='form form-group'>
            <h4>Restaurants,Hotels & Attractions Around You!</h4>
            <label htmlFor="options">Select</label>
            <select id='options' className='m-auto form-control w-50'>
                <option value={"Res"} >Restaurants</option>
                <option value={"Res"} >Hotels</option>
                <option value={"Res"} >Attractions</option>
            </select>
        </form>
    </div>
  )
}

export default List