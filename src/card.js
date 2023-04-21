import React from "react";


export default function Card(props)
{
    return(

        <div className="card-container">
             <div className="card1">
                        <img src={props.image} className="image1" alt="" />
                              <br></br>
                              <div className="info">
                                  <img src="Star 1.png"  alt="" width="10px"/>
                                    
                                        <span>{props.rating}</span>
                                        <span>{props.value}</span>
                                        <span>USA</span>
                                        <p>


                                       Life lessons with Katie Zaferes<br></br>
                                        <span className="bold">From $136 / person</span>
                                       </p>
                                </div>   

                        
                </div>
                
                

                </div>

        
    )
}