import React from 'react';

type CardProps = {
  title?: string | null,
  image?: string | null,
  nativeTitle?: string | null,
  className?: string | null,
};

const Card: React.FC<CardProps> = ({
  title,
  image,
  nativeTitle,
  className,
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg flex flex-col
                   justify-center items-center gap-4 p-2 transition
                   border border-opacity-40 border-primary
                   hover:shadow-lg hover:scale-105 ${className}`}
    >
      {image && <img src={image} alt={title ?? 'Imagem'} />}
      <h2>{title}</h2>
      {nativeTitle && <h3>{nativeTitle}</h3>}
    </div>
  );
};

export default Card;
