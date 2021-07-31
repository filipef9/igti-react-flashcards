import { useEffect, useState } from 'react';

const FlashCard = ({
  title = 'Título do card',
  description = 'Descrição do card',
  showFlashCardTitle = true,
}) => {
  const [showTitle, setShowTitle] = useState(true);
  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle]);

  const fontSizeClassName = showTitle ? 'text-xl' : 'text-sm';

  const handleCardClick = () => {
    setShowTitle(currentShowTitle => !currentShowTitle);
  };

  return (
    <div
      className={`
        shadow-lg
        cursor-pointer
        m-2 p-4 w-96 h-48
        flex items-center justify-center
        font-semibold ${fontSizeClassName}
      `}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
};

export default FlashCard;
