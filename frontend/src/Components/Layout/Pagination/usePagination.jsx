import  { useState } from "react";

export const usePagination = (perPageRecords, totalPageRecodrs) => {
  const totalPages = Math.ceil(totalPageRecodrs / perPageRecords);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageRecords - 1);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const displayPage = (pageNo) => {
    setCurrentPageIndex(pageNo);

    let end_page_index = perPageRecords * pageNo - 1;
    let start_page_index = perPageRecords * pageNo - 1;

    setStartPageIndex(start_page_index);

    if (end_page_index > totalPageRecodrs) {
      setEndPageIndex(totalPageRecodrs - 1);
    } else {
      setEndPageIndex(end_page_index);
    }
  };
  return [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ];
};
