import React from 'react';

export default function Paginado({ productsPorPage, allProducts, paginate }) {
    // const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allProducts / productsPorPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center mt-3">
        {/* <li className="page-item" disabled={currentPage === 1}>
          <a className="page-link" href="#" onClick={() => paginate(currentPage )} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li> */}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          {/* <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a> */}
        </li>
      </ul>
    </nav>
  );
}
