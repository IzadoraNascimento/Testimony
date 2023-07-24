import styles from './styles.module.css';
import Icon from '../Icon'


export default function Card({image, name, subtitle, prevCard, nextCard}){
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className='element'>
          <img className={styles.image} src={image}/>
        </div>
        <div className='element'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam exercitationem sed a, dolorem cupiditate ut aut doloremque quos voluptates eius. Hic adipisci eos quo eum mollitia rerum repudiandae? Optio.</p>
          <h2>{name}</h2>
          <span>{subtitle}</span>
        </div>
      </div>
      <div className='element'>
        <Icon prevCard={prevCard} nextCard={nextCard} />
      </div>
    </div>
  )
}