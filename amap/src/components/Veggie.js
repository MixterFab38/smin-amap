import React from 'react';

class Veggie extends React.Component {
  render() {
    var addToCart = [] //Tableau
    const details = this.props.details;
    if (details.status === "available"){
      addToCart.push(<button onClick={() => this.getveggie()}>Ajouter au panier</button>)
    } else {
      addToCart.push(<button disabled>Epuisé !</button>)
    }

  	//const details = this.props.details;
  	
    return (
      <li className="menu-veggie">
      	<img src={details.image} alt={details.name} />
      	<h3 className="veggie-name">
      		{details.name}
      		<span className="price">{details.price}</span>
      	</h3>
      	<p>{details.desc}</p>
        {addToCart}
      </li>
    )
  }

  ajout()
  {
    
  }
}

export default Veggie;
