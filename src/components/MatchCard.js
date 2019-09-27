import React from "react";
 import "./MatchCards.css";
function MatchCard(props){
	console.log(props)
// const MatchCard = props => (
 return(
	<div onClick={() => props.setClicked(props.id)} className="card">
		<div className="img-container">
			  <img alt={props.name} 
			  src={props.image}
			//  style={{backgroundImage:`url("${props.image}")`}} 
			  />
    	</div>
  </div>)
};

export default MatchCard;