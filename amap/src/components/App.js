import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {

	constructor(){
		super();
		this.state = {
			veggies: {}
		}

		this.addVeggie = this.addVeggie.bind(this);
	}

	addVeggie(veggie) {
		//maj le state
		const veggies = {...this.state.veggies};

		//add nos nouveaux légumes
		veggies["veggie-1"] = veggie;

		//appliquer le texte
		this.setState({veggies});
	}

	render() {
		return (
			<div className="amap">
				<div className="menu">
					<Header tagline = "Les bons legumes" />
				</div>
				<Order/>
				<Inventory addVeggies={this.addVeggies}/>
			</div>
		)
	}
}

export default App;