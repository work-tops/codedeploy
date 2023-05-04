import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import { Button, Collapse, Form, Card } from 'react-bootstrap';
import { courseFilters } from './courseData';
import { slugifyText } from '../../../TemplateAssets/helpers/utils';
import Flex from '../../../TemplateAssets/common/Flex';
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductsFilters = ({ setShow, isOffcanvas }) => {
    const [filterOptions, setFilterOptions] = useState([]);

    const handleFilterOptions = e => {
        const { type, name, value, checked } = e.target;
        if (type === 'checkbox') {
            let options = [...filterOptions];
            options = options.filter(option => option.value !== value);

            checked && options.push({ name, value });
            setFilterOptions(options);
        }

        if (type === 'radio') {
            const isExists = filterOptions.some(el => el.name === name);
            isExists
                ? setFilterOptions(
                    filterOptions.map(el => (el.name === name ? { ...el, value } : el))
                )
                : setFilterOptions([...filterOptions, { name, value }]);
        }
    };

    return (
        <Card className="course-filter m-4">
            <SimpleBarReact style={{ height: '100%' }}>
                <Card.Header as={Flex} className="flex-between-center pt-x1">
                    {/* <Flex className="gap-2 flex-xl-grow-1 align-items-center justify-content-xl-between"> */}
                        <div className='justify-content-xl-between d-flex m-2'>
                        <h5 className="mb-0 text-700 fs-0 d-flex align-items-center">
                            <FontAwesomeIcon icon="filter" className="fs--1 me-1" />
                            <span>Filter</span>
                        </h5>
                        <Button
                            variant="outline-secondary"
                            size="sm"
                            className="ms-2 mt-0 mb-0"
                            style={{ fontSize: '12px' }}
                            onClick={() => setFilterOptions([])}
                            >
                            <FontAwesomeIcon icon="redo-alt" className="me-1 fs--2" />
                            Reset
                        </Button>
                            </div>
                    {/* </Flex> */}
                    {isOffcanvas && (
                        <Button
                            onClick={() => setShow(false)}
                            className="btn-close text-reset"
                            size="sm"
                            variant="link"
                        ></Button>
                    )}
                </Card.Header>
                <Card.Body className="py-0 mt-2">

                    <Flex wrap="wrap" className=" mb-2">
                        <span className='badge m-1 bg-secondary text-white'>Semi Precious <Icon icon="ic:sharp-close" color="white" width="14" height="14" /></span>
                        <span className='badge m-1 bg-secondary text-white'>Ceramic <Icon icon="ic:sharp-close" color="white" width="14" height="14" /></span>
                        <span className='badge m-1 bg-secondary text-white'>Terrazzo <Icon icon="ic:sharp-close" color="white" width="14" height="14" /></span>
                    </Flex>

                    <ul className="list-unstyled mt-1">
                        {courseFilters.map((filter, index) => (
                            <FilterItem
                                key={slugifyText(filter.label)}
                                index={index}
                                filter={filter}
                                filterOptions={filterOptions}
                                setFilterOptions={setFilterOptions}
                                handleFilterOptions={handleFilterOptions}
                            />
                        ))}
                    </ul>
                </Card.Body>
            </SimpleBarReact>
        </Card>
    );
};

ProductsFilters.propTypes = {
    setShow: PropTypes.func,
    isOffcanvas: PropTypes.bool
};

const FilterItem = ({ filter, index, filterOptions, handleFilterOptions }) => {
    const [open, setOpen] = useState(false);

    return (
        <li className={`${courseFilters.length - 1 !== index && 'border-bottom'}`}>
            <Button
                variant="link"
                onClick={() => setOpen(!open)}
                aria-controls={`${slugifyText(filter.label)}-collapse`}
                aria-expanded={index === 0 || index === 1 ? !open : open}
                className="collapse-indicator-plus w-100 fs--2 fw-medium text-start text-600 text-decoration-none py-3 px-0"
            >
                {filter.label}
            </Button>
            <Collapse
                in={index === 0 || index === 1 ? !open : open}
                id={`${slugifyText(filter.label)}-collapse`}
            >
                <ul className="list-unstyled">
                    {filter.options &&
                        filter.options.map(option => (
                            <li key={slugifyText(option.label)}>
                                <Form.Check
                                    type="checkbox"
                                    className="form-check d-flex ps-0"
                                >
                                    <Form.Check.Label
                                        className="fs--1 flex-1 text-truncate"
                                    >
                                        {option.label}
                                    </Form.Check.Label>

                                    <Form.Check.Input
                                        type="checkbox"
                                    />
                                </Form.Check>
                            </li>
                        ))}
                </ul>
            </Collapse>
        </li>
    );
};

ProductsFilters.propTypes = {
    index: PropTypes.number,
    filter: PropTypes.shape({
        label: PropTypes.string,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                name: PropTypes.string,
                type: PropTypes.string,
                value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
            })
        )
    }),
    handleFilterOptions: PropTypes.func,
    filterOptions: PropTypes.array
};

export default ProductsFilters;
