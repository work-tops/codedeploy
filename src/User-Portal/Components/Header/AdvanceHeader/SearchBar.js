
import React from 'react';
import { Form } from 'react-bootstrap';
function SearchBar() {

    return (
        <>
            <Form className="position-relative">
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    className="rounded-pill search-input"
                />
            </Form>
        </>
    )
}
export default SearchBar;