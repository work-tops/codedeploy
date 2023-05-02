import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Menubar from "../../Menubar/Menubar";
import Header from "../../Header/Header";
import product_image from '../../Images/product_image.png'
import { Icon } from "@iconify/react";
import { getAllData } from "../../../../Services/ProxyService";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

function ProductList() {

    const [mainList, setMainList] = useState([]);
    const [products, setProducts] = useState([]);
    const [productTags, setProductTags] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const getProductList = async () => {
        const response = await getAllData('products');
        setProducts(response.data.products);
        setMainList(response.data.products);
        setShowSpinner(false);
    }
    const getProductTags = async () => {
        const response = await getAllData('master/product_tags');
        setProductTags(response.data.master[0].data);
        // console.log(productTags);
    }
    const handleFilter = (e) => {
        var _filters = [...filterList];
        if(e.target.checked == true){
            _filters.push(e.target.value);
        }else{
            var _inx = _filters.findIndex(x=> x == e.target.value);
            _filters.splice(_inx,1);
        }
        mainProductList(_filters);
        setFilterList(_filters);
    }
    const removeFilter = async (index) => {
        var _filters = [...filterList];
        productTags.forEach((x,i)=>{
            if(x.list){
                x.list.forEach((y,j)=>{
                    if(y.value == _filters[index]){
                        document.getElementById(`filter_${j}_key_${i}`).checked = false;
                    }
                })
            }
        })
        _filters.splice(index,1);
        mainProductList(_filters);
        setFilterList(_filters);
    }
    const mainProductList = async (_filters) => {
        var _mainList = [...mainList];
        var _mainFilteredList = [];
        _filters.map((x)=>{
            _mainList.map((y)=>{
                if(y.type.name == x){
                    _mainFilteredList.push(y);
                }
                var _clr = y.variant[0].color?.split(",");
                if(_clr){
                    _clr.map((z)=>{
                        if(z.trim() == x.trim()){
                            _mainFilteredList.push(y); 
                        }
                    })
                }
            })
        });
        if(_filters.length > 0){
            setProducts(_mainFilteredList);
        }
        else{
            setProducts(_mainList);
        }
    }
    useEffect(() => {
        getProductList();
        getProductTags();
    }, [])
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col className="shadow" style={{ background: 'white' }} lg={12}>
                    <div className="d-flex justify-content-between">
                        <div className="m-3">
                            <p >
                                {/* Showing 1-24 of 205 Products */}
                            </p>
                        </div>
                        <div className="m-3">
                            <Row>
                                <Col lg={4}>
                                    <p className="mt-2 fw-bold">Sort By :</p>
                                </Col>
                                {''}
                                <Col lg={7}>
                                    <Form.Group>
                                        <Form.Select className="ms-1 w-100">
                                            <option>Best Match</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col lg={1}>
                                    <Icon icon="ic:round-menu" className="ms-2 mt-1 me-2" color="lightgray" width="28" height="28" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Row>
                    <Row>
                        <Col className="fs-6 mt-3 fw-semibold">

                            {/* <span className="bg-dark ms-3 text-white p-2">
                                Filter <Icon icon="ion:funnel-outline" color="white" width="28" height="28" />
                            </span> */}

                        </Col>
                        <Col className="mt-3">
                            {filterList?.map((x,i)=>{
                               return <span className="badge m-1 bg-secondary" key={`filter_${i}`}>
                                    {x} <Icon icon="ic:sharp-close" onClick={()=>removeFilter(i)} color="white" width="14" height="14" />
                                </span>
                            })}
                        </Col>
                    </Row>
                    <Col lg={3}>
                        <Form className="mt-2">
                            {productTags?.map((data, key) => (
                               data?.list ? <Form.Group className="mb-3" key={`tags_${key}`}>
                                    <Form.Label className="ms-2 fw-bold fs-5">
                                        {data?.name}
                                    </Form.Label>
                                    {data?.list?.map((x,i) => {
                                        return <Row className="mb-3" key={`check_${i}_${x}`}>
                                            <Col lg={1} className="ms-3">
                                                <Form.Check id={`filter_${i}_key_${key}`}  value={x?.value} onChange={(e)=>handleFilter(e)} />
                                            </Col>
                                            <Col> 
                                               <label htmlFor={`filter_${i}_key_${key}`}>{x?.value}</label>
                                            </Col>
                                        </Row>
                                    })}
                                </Form.Group>:<></>
                            ))}
                        </Form>
                    </Col>
                    <Col lg={9}>
                        <div style={{ height: '0px' }} className="text-center">
                            {showSpinner && (
                                <div
                                    className="spinner-border"
                                    role="status"
                                    style={{ width: '70px', height: '70px', fontSize: "20px", opacity: "0.7" }} // set the width and height here
                                >
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                        </div>
                        <Row className="mt-3">
                            {products.map((data, key) => (
                                <Col lg={4} key={`product_${key}`}>
                                    <div className="mb-3">
                                        <img src={data?.attachments[0]?.url} width="300px" />
                                        {/* <img src={product_image} width="300px" /> */}
                                        <p className="fw-semibold m-1">{data.name}</p>
                                        <small className="m-1">Quartz</small>
                                        <span className="d-block">
                                            <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                            (20)
                                        </span>
                                        <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ {data?.variant[0]?.pricing?.price}</p>
                                        <Link to={`productdetails/${data._id}`}><Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button></Link>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row >
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row >
        </>
    )
}
export default ProductList