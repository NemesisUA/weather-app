import "./Pagination.css";
import classNames from "classnames";

const range = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

const PaginationItem = ({ page, currentPage, onPageChange, isDisabled }) => {
  const liClasses = classNames({
    "page-item": true,
    active: page === currentPage,
    disabled: isDisabled,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);

  const pages = range(1, pagesCount + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  return (
    <ul className="pagination">
      <PaginationItem
        page="First"
        currentPage={currentPage}
        onPageChange={() => onPageChange(1)}
        isDisabled={isFirstPage}
      />
      <PaginationItem
        page="Prev"
        currentPage={currentPage}
        onPageChange={() => onPageChange(currentPage - 1)}
        isDisabled={isFirstPage}
      />
      {pages.map((page) => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      ))}
      <PaginationItem
        page="Next"
        currentPage={currentPage}
        onPageChange={() => onPageChange(currentPage + 1)}
        isDisabled={isLastPage}
      />
      <PaginationItem
        page="Last"
        currentPage={currentPage}
        onPageChange={() => onPageChange(pages.length)}
        isDisabled={isLastPage}
      />
    </ul>
  );
};
export default Pagination;