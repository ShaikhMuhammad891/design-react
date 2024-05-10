import React, { useState } from "react";

// Sample data
const data = [
  { id: 1, title: "Title 1", description: "Description 1" },
  { id: 2, title: "Title 2", description: "Description 2" },
  { id: 3, title: "Title 3", description: "Description 3" },
  { id: 4, title: "Title 4", description: "Description 4" },
  { id: 5, title: "Title 5", description: "Description 5" },
  { id: 6, title: "Title 6", description: "Description 6" },
  { id: 7, title: "Title 7", description: "Description 7" },
  { id: 8, title: "Title 8", description: "Description 8" },
  { id: 9, title: "Title 9", description: "Description 9" },
  { id: 10, title: "Title 10", description: "Description 10" },
  { id: 11, title: "Title 11", description: "Description 11" },
  { id: 12, title: "Title 12", description: "Description 12" },
  // Add more data as needed
];

const pageSize = 4; // Number of items per page

const SimplePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, data.length - 1);
  const currentPageData = data.slice(startIndex, endIndex + 1);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Simple Pagination Example</h1>
      <ul>
        {currentPageData.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SimplePagination;
