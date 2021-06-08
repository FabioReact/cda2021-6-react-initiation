function ChildrenComponent(props) {
	return (
		<div className="component">
			<p className='component-name'>Composant ChildrenComponent</p>
			<p>Pour afficher le contenu entre les balises du composant "ChildrenComponent", je devrais utiliser la propriété: props.children</p>
			<p>{props.children}</p>
		</div>
	)
}

export default ChildrenComponent