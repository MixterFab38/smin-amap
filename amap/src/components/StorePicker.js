import React from 'react';
import PropTypes from 'prop-types'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(event) {
		event.preventDefault();
		//history.push(location)
		const storeId = this.storeInput.value;
		console.log('On va vers ${storeId}');
		console.log('Tu as envoyé le formulaire');
		// const value = $('input').val()
		//On récupère le texte entré dans le formulaire

		//Ensite on va se déplacer de / vers /store/:storeId
		this.props.history.push('store/${storeInput}');
	}

	render() {
		//Dans tous les cas, afficher
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Entrez un nom de magasin</h2>
				<input type="text" ref={(input) => {this.storeInput = input}} required placeholder="Nom du magasin" defaultValue={getFunName()}/>
				<button type="submit">Visiter le magasin => </button>
			</form>
		)
	}
}


StorePicker.contextTypes = {
	router: PropTypes.object
}
export default StorePicker;