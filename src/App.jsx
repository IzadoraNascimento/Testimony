import React, { useState } from 'react';
import Card from './components/Card';
import Tanya from '../public/image-tanya.jpg';
import John from '../public/image-john.jpg';

function App() {
  // estado para acompanhar o índice do card atual
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // array com os dados dos cards
  const cardsData = [
    { name: "Tanya Sinclair", image: Tanya, subtitle: "UX Enginner" },
    { name: "John Tarkpor", image: John, subtitle: "Junior Front-end Developer" },
  ];

  // função para avançar para o próximo card
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  // função para voltar ao card anterior
  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Renderize o card atual com base no índice */}
      <Card {...cardsData[currentCardIndex]}
      // passar as props por componentes intermediários
        prevCard={prevCard}
        nextCard={nextCard}
      />
    </>
  );
}

export default App;