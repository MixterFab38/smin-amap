import React from 'react';

class Veggie extends React.Component {
  render() {
  	//const details = this.props.details;
  	const { details } = this.props;
    return (
      <li className="menu-veggie">
      	<img src={details.image} alt={details.name} />
      	<h3 className="veggie-name">
      		{details.name}
      		<span className="price">{details.price}</span>
      	</h3>
      	<p>{details.desc}</p>
      	<button id="addcart" name="addcart" disabled={details.status === "unavailable"}>Aujouter au panier</button>
      </li>
    )
  }

  ajout()
  {
    
  }
}

export default Veggie;
