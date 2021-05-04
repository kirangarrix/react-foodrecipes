import React from 'react';
import './RecipeDetails.css';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SampleData from './sampleDetails.json';
import Ingredients from './Ingredients';
const API_KEY='794a4514771c48959b05902029175859';
 
function RecipeDetails (props) {
     let {recipeID} = useParams();
     const [details,setDetails]=useState({})
    useEffect(() => {
        fetchRecipeInformation();
    }, [recipeID]);
    let fetchRecipeInformation = async ()=>{
        let response = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`);
        let recipeInfoData = await response.json();
        
        // console.log(recipeInfoData);
        setDetails(recipeInfoData)
       };


    return(
        <div className="recipeDetails">
       <Link to="/"> <div className="recipeDetailsClose">X</div></Link>
           {/* {Header} */}
           <div
            style={{
                backgroundImage:`url(${details.image})`,
                height:'200px',
                objectFit:'cover',
                position:'relative' 
                   
                }} 
           >
           <span className="recipeTitle">{details.title}</span>
              
           </div>
           <div style={{ 
               height:'calc(100%-200px)',
               overflow:'auto'
            }}>
           {/* {Summery} */}
           <p className="recipeSummary" dangerouslySetInnerHTML={{__html:details.summary }}></p>
           {/*{Incredians}  */}
           <Ingredients ingredients={details.extendedIngredients || []}/>
           {/* {Instruction} */}
           <p className="recipeSummary" dangerouslySetInnerHTML={{__html:details.instructions }}>
               {/* {details.instructions} */}
           </p>
           </div>
        </div>
    );
  }


  export default RecipeDetails;