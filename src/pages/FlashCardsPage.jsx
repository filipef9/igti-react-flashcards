import FlashCard from '../components/FlashCard';
import Header from '../components/Header';
import Main from '../components/Main';
import FlashCards from '../components/FlashCards';
import { allFlashCards } from '../data/allFlashCards';
import Button from '../components/Button';
import { useState } from 'react';
import { helperShuffleArray } from '../helpers/arrayHelpers';

const FlashCardsPage = () => {
  const [allCards, setAllCards] = useState(allFlashCards);

  const handleButtonClick = () => {
    setAllCards(helperShuffleArray(allCards));
  };

  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar cards</Button>
        </div>
        <FlashCards>
          {allCards.map(({ id, title, description }) => (
            <FlashCard key={id} title={title} description={description} />
          ))}
        </FlashCards>
      </Main>
    </>
  );
};

export default FlashCardsPage;
