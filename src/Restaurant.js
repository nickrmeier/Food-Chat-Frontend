import React from 'react';


export const RestaurantList = (props) => {
    console.log(props.restaurants)
    let list = props.restaurant.map(restaurant => {
    return <li key={restaurant._id}>{restaurant.name}</li>
    });
    return (
        <div>
            <h1>Restaurants:</h1>
            {list}
        </div>
    )
}


		<RestaurantList restaurant={props.restaurants} />;