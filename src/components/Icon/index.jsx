import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';

library.add(faArrowLeft, faArrowRight); 

export default function Icon({ prevCard, nextCard }) {
  return (
    <div className={styles.icons}>
      {/* Chame as funções prevCard e nextCard nos eventos de clique */}
      <FontAwesomeIcon icon="arrow-left" onClick={prevCard} />
      <FontAwesomeIcon icon="arrow-right" onClick={nextCard} />
    </div>
  )
}