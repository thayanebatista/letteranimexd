import React from 'react';
import Button from './Button';

interface PaginationProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center gap-4 pb-10">
      <div className="flex justify-center">
        <Button
          label="Previous"
          disabled={currentPage === 1}
          onClick={handlePrevious}
        />
      </div>
      <div className="flex justify-center">
        <Button label="Next" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Pagination;
