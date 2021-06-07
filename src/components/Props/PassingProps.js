import ReceivingProps from './ReceivingProps' // import par défaut
// Documentation: https://slides.com/fabiodev/react#/4/2

function PassingProps(props) {
	return (
		<div class='component'>
			<p class='component-name'>Composant PassingProps:</p>
			<ReceivingProps name='world' day={7} rainy={false} />
			<ReceivingProps name='Fabio' day={14} rainy />
		</div>
	)
}

export { PassingProps } // export nommé
// Documentation: https://slides.com/fabiodev/react#/4/1