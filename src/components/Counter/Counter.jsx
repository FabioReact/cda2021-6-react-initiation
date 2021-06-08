import { useState } from 'react'

const Counter = () => {
	// const state = useState(0)
	// const counterValue = state[0]
	// const setCounterValue = state[1]
	const [counterValue, setCounterValue] = useState(0)
	// useState nous retourne un tableau dans lequel il y aura TOUJOURS deux éléments
	// le premier élément de mon tableau est la valeur courante de mon état (state)
	// le second élément est une fonction qui permet de mettre à jour mon état (state)

	const updateCounter = (number) => {
		setCounterValue(counterValue + number)
	}

	return (
		<section className='component'>
			<p className='component-name'>Composant Counter</p>
			<p>Valeur du compteur: {counterValue}</p>
			<button onClick={() => updateCounter(1)}>Incrémenter</button>
			<button onClick={() => updateCounter(-1)}>Décrémenter</button>
		</section>
	)
}

export default Counter