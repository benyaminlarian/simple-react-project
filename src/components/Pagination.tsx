import { useState, useEffect } from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: Function;
}

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const [startFrom, setStartFrom] = useState(Math.max(1, Math.floor((currentPage) / 10) * 10));
  const [endAt, setEndAt] = useState(Math.min(totalPages, startFrom + 10));

  useEffect(() => {
    setStartFrom(Math.max(1, Math.floor((currentPage) / 10) * 10))
    setEndAt(Math.min(totalPages, startFrom + 10))
  }, [currentPage, totalPages]);

  const pageNumbers = [];
  for (let i = startFrom; i <= endAt; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (number: number) => {
    console.log('clicked')
    setStartFrom(Math.max(1, Math.floor((currentPage) / 10) * 10))
    setEndAt(Math.min(totalPages, startFrom + 10))
    onPageChange(number);
  };

  return (
    <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={() => handlePageClick(currentPage-1)}>Previous</button>
        </li>
      {pageNumbers.map((number) => (
        <li className="page-item">
        <button className="page-link" key={number} onClick={() => handlePageClick(number)}>{number}</button>
      </li>
    ))}
      <li className="page-item">
        <button className="page-link" onClick={() => handlePageClick(currentPage+1)}>Next</button>
      </li>
  </ul>
);
}

export default Pagination;