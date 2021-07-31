import FlashCard from '../components/FlashCard';
import Header from '../components/Header';
import Main from '../components/Main';
import { allFlashCards } from '../data/allFlashCards';

const FlashCardsPage = () => {
  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        {allFlashCards.map(({ id, title, description }) => (
          <FlashCard key={id} title={title} description={description} />
        ))}
      </Main>
    </>
  );
};

export default FlashCardsPage;
