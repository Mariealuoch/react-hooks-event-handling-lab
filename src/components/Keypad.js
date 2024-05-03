// Code Keypad Component Here
import React from "react";

function Keypad (){

    function onChangeEvent(event){
        console.log( "Entering password...")

    }
    return (
        <div>
            
            <input type="password"  onChange= {onChangeEvent} />

        </div>
    )
}

export default Keypad;