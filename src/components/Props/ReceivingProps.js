function ReceivingProps({ name, day, rainy }) {
	// const name = props.name
	// const day = props.day
	// const rainy = props.rainy
	// const { name, day, rainy } = props // Object destructuring
	return (
		<div class='component' style={{'--color': 'green'}}>
			<p class='component-name'>Composant: ReceivingProps</p>
			<p>Hello {name}!</p>
			<p>On est le {day} du mois.</p>
			<p>Pleut-il: {rainy.toString()}</p>
		</div>
	)
}

// Pour importer un composant dans un autre fichier, il faudra au préalable que j'exporte ici le composant
// Documentation: https://slides.com/fabiodev/react#/4/1
export default ReceivingProps // export par défaut
