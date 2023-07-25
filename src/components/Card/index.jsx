import styles from './styles.module.css';
import Icon from '../Icon'


export default function Card({image, name, subtitle, prevCard, nextCard}){
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.element}>
          <img className={styles.image} src={image}/>
        </div>
        <div className={styles.element}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam exercitationem sed a, dolorem cupiditate ut aut doloremque quos voluptates eius. Hic adipisci eos quo eum mollitia rerum repudiandae? Optio.</p>
          <h2>{name}</h2>
          <h3>{subtitle}</h3>
        </div>
      </div>
      <div className={styles.element}>
        <Icon prevCard={prevCard} nextCard={nextCard} />
      </div>
    </div>
  )
}