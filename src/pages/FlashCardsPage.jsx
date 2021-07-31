import FlashCard from '../components/FlashCard';
import Header from '../components/Header';
import Main from '../components/Main';
import FlashCards from '../components/FlashCards';
import { allFlashCards } from '../data/allFlashCards';

const FlashCardsPage = () => {
  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <FlashCards>
          {allFlashCards.map(({ id, title, description }) => (
            <FlashCard key={id} title={title} description={description} />
          ))}
        </FlashCards>
      </Main>
    </>
  );
};

export default FlashCardsPage;
