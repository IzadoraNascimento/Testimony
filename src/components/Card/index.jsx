import styles from './styles.module.css';
import Icon from '../Icon'


export default function Card({image, name, subtitle, prevCard, nextCard}){
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image}/>
      <Icon prevCard={prevCard} nextCard={nextCard} />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam exercitationem sed a, dolorem cupiditate ut aut doloremque quos voluptates eius. Hic adipisci eos quo eum mollitia rerum repudiandae? Optio.</p>
        <h2>{name}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}