import styles from './App.module.css' // importé de façon locale
import { PassingProps } from './components/Props/PassingProps' // import nommé
import ChildrenComponent from './components/ChildrenComponent/ChildrenComponent'

function App() {
  const titleStyle = {
    color: 'blue',
    borderBottom: '2px solid blue',
  }
	const prenom = 'Fabio'

	return (
		<>
			<h1 style={titleStyle}>Apprendre React avec {prenom}</h1>
			<p className={styles.italic}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ipsum qui quibusdam voluptatem repudiandae voluptate eius dolorem harum veritatis beatae voluptates, hic alias architecto assumenda officia perspiciatis quos nemo possimus eos laborum! Molestias ad, expedita doloremque voluptatem maxime hic ea amet dicta ab consequatur, necessitatibus, atque est nisi beatae vero!
			</p>
			<PassingProps />
			<ChildrenComponent>Contenu entre les balises</ChildrenComponent>
		</>
	)
}

export default App
