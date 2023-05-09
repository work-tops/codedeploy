/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import classNames from 'classnames';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Flex from '../Flex';

export const AdvanceTableFooter = ({
  page,
  pageSize,
  pageIndex,
  rowCount,
  setPageSize,
  canPreviousPage,
  canNextPage,
  viewAllBtn,
  nextPage,
  previousPage,
  rowInfo,
  perPage,
  rowsPerPageSelection,
  navButtons,
  rowsPerPageOptions = [5, 10, 15],
  className
}) => {
  const [isAllVisible, setIsAllVisible] = useState(false);
  return (
    <div
    className="d-flex justify-content-between align-items-center"
      // className={classNames(
      //   className,
      //   'align-items-center justify-content-between'
      // )}
    >
      <div className="fs--1 d-flex align-items-center">
        {rowInfo && (
          <p className="mb-0">
            <span className="d-none d-sm-inline-block me-2">
              {pageSize * pageIndex + 1} to {pageSize * pageIndex + page.length}{' '}
              of {rowCount}
            </span>
            {viewAllBtn && (
              <>
                <span className="d-none d-sm-inline-block me-2">&mdash;</span>
                <Button
                  variant="link"
                  size="sm"
                  className="py-2 px-0 fw-semi-bold"
                  onClick={() => {
                    setIsAllVisible(!isAllVisible);
                    setPageSize(isAllVisible ? perPage : rowCount);
                  }}
                >
                  View {isAllVisible ? 'less' : 'all'}
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="ms-1 fs--2"
                  />
                </Button>
              </>
            )}
          </p>
        )}
        {rowsPerPageSelection && (
          <>
            <p className="mb-0 mx-2">Rows per page:</p>
            <Form.Select
              size="sm"
              className="me-4 w-auto"
              onChange={e => setPageSize(Number(e.target.value))}
              defaultValue={pageSize}
            >
              {rowsPerPageOptions.map(value => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </Form.Select>
          </>
        )}
      </div>
      {navButtons && (
        <div className='d-block'>
          <Button
            size="sm"
            className='w-100 px-4 ms-2 mb-2'
            variant={canPreviousPage ? 'primary' : 'light'}
            onClick={() => previousPage()}
            // className={classNames({ disabled: !canPreviousPage })}
          >
            Previous
          </Button>
          <Button
            size="sm"
            className='w-100 px-4 ms-2'
            variant={canNextPage ? 'primary' : 'light'}
            // className={classNames('px-4 ms-2', {
            //   disabled: !canNextPage
            // })}
            onClick={() => nextPage()}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdvanceTableFooter;
