// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe (){

    function onFocus(event){
        console.log("Good!")

    }

    function onBlur(event){
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onFocus={onFocus} onBlur={onBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;
