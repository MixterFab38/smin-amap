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

	addVeggie() {
		//maj le state
		const veggies = "veggie-1";

		//add nos nouveaux légumes

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