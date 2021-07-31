import { useState } from 'react';

const FlashCard = ({
  title = 'Título do card',
  description = 'Descrição do card',
}) => {
  const [showTitle, setShowTitle] = useState(true);

  const fontSizeClassName = showTitle ? 'text-xl' : 'text-md';

  const handleCardClick = () => {
    setShowTitle(currentShowTitle => !currentShowTitle);
  };

  return (
    <div
      className={`
        shadow-lg
        cursor-pointer
        p-4 w-64 h-32
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
