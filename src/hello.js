import React from "react";



 export default function Helloworld()
 {
    const d=new Date()
    const hours=d.getHours()
    let time
        if (hours<12)
        {
        time="morning"
        }
        else if ( hours>=12&& hours<17)
        {
        time="afternoon"
        }
        else
        {
            time="night"
        }
     return(
        <h1>good{time}</h1>)
    
 }