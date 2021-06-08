function MapComponent(props) {
	const cities = ['Rio', 'Salvador', 'Tokyo', 'Nairobi', 'Lisbon']
	return (
		<div className="component">
			<p className='component-name'>Composant MapComponent</p>
			<p>Lorsqu'on a un tableau sur lequel ou souhaite itérer pour générer des nouveaux élements, on utilisera la méthode map: <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Documentation MDN</a> - <a href="https://fr.reactjs.org/docs/lists-and-keys.html">Documentation React</a></p>
			<ul>
				{cities.map((city, index) => <li key={index}>{city}</li>)}
			</ul>
		</div>
	)
}

export default MapComponent