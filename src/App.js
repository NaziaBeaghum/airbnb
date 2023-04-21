import React from "react";

import'./navbar';
import Navbar from "./navbar";

import'./main';
import Main from "./main";

import './card';
import Card from "./card";

export default function App() {
   return(
           <div>
            <Main/>
            <Navbar/>

            <Card
              image="image 12.png"
              rating={5.0}
              value="(6)"
            
              />


            <Card
             image="wedding-photography 1.png"
              rating={10}
              value="(7.0)"
              
            />

            <Card
            image="mountain-bike 1.png"
            rating={4}
            value="(8)"
        
            />
           
           
          </div>
  );
}

