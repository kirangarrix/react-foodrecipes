import React from 'react';
import './RecipeDetails.css';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom"; 

function RecipeDetails (props) {
    let {recipeId} = useParams();
    console.log(recipeId);
    return(
        <div className="recipeDetails">
       <Link to="/"> <div className="recipeDetailsClose">X</div></Link>
            details...
        </div>
    )
  }


  export default RecipeDetails;