import React from "react";

function MyFood({name, origin, nickname}){

    return <div>
        <h2>My Food</h2>
    
        <p>The food I like best is {name}. It originated from {origin}. It is popularly known as {nickname}.</p>

    </div>
}

export default MyFood;