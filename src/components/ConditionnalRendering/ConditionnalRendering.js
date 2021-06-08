const MySecretSpan = ({ estVisible }) => {
	if (estVisible) {
		return <span>secret</span>
	} else {
		return <span>******</span>
	}
}

const MySecretSpan2 = ({ estVisible }) => {
	return estVisible ? <span>secret</span> : <span>******</span>
}

const MySecretSpan3 = ({ estVisible }) => {
	return (
		<>
			{estVisible && <span>secret</span>}
			{!estVisible && <span>******</span>}
		</>
	)
}

const ConditionnalRendering = () => {
	return (
		<div className="component">
			<p className="component-name">Composant ConditionnalRendring</p>
			<p>
				Mot de passe: <MySecretSpan estVisible={true} />
			</p>
			<p>
				Mot de passe: <MySecretSpan2 estVisible={true} />
			</p>
			<p>
				Mot de passe: <MySecretSpan3 estVisible={true} />
			</p>

		</div>
	)
}

export default ConditionnalRendering