import FlashCard from '../components/FlashCard';
import Header from '../components/Header';
import Main from '../components/Main';
import FlashCards from '../components/FlashCards';
import { allFlashCards } from '../data/allFlashCards';
import Button from '../components/Button';
import { useState } from 'react';
import { helperShuffleArray } from '../helpers/arrayHelpers';
import RadioButton from '../components/RadioButton';

const FlashCardsPage = () => {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [showTitle, setShowTitle] = useState(true);

  const handleButtonClick = () => {
    setAllCards(helperShuffleArray(allCards));
  };

  const handleShowTitleRadioButtonChange = () => {
    setShowTitle(true);
  };
  const handleShowDescriptionRadioButtonChange = () => {
    setShowTitle(false);
  };

  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar cards</Button>
        </div>

        <div className="flex items-center justify-center space-x-2 my-4">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            checked={showTitle}
            onRadioButtonChange={handleShowTitleRadioButtonChange}
          >
            Mostrar título
          </RadioButton>
          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            checked={!showTitle}
            onRadioButtonChange={handleShowDescriptionRadioButtonChange}
          >
            Mostrar descrição
          </RadioButton>
        </div>

        <FlashCards>
          {allCards.map(({ id, title, description }) => (
            <FlashCard
              key={id}
              title={title}
              description={description}
              showFlashCardTitle={showTitle}
            />
          ))}
        </FlashCards>
      </Main>
    </>
  );
};

export default FlashCardsPage;
