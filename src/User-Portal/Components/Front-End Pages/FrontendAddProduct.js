import { useState, React, useEffect } from 'react';
import { Col, Row, Card, Container, Button, Breadcrumb, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
// import SellerPortalHeader from '../Header/SellerPortalHeader'
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { uploadImage } from "../../../Services/ImageService";
import { createData, getAllData } from "../../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';

const FrontendAddProduct = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);

    //varient state
    const history = useHistory();
    const [variants, setVariants] = useState([]);
    console.log(variants)
    const [isEdit, setEditButton] = useState(false);
    const [editIndex, setEditVarientIndex] = useState(0);

    const [variant, setVarientObject] = useState({
        imageInx: null,
        color: "",
        size: "",
        finish_type: "",
        price: "",
        compare_at: "",
        handling_changes: "",
        sales_price: "",
        required_shipping: false,
        charge_taxes: false,
        sku: "",
        barcode: "",
        min_purchase_qty: "",
        quantity: "",
        track_inventory: false,
        remaining_quantity: 5,
    });

    console.log(Boolean(variant.required_shipping))

    //varient functionality
    const variantChange = (e) => {
        const _variant = { ...variant };
        _variant[e.target.name] = e.target.value;
        setVarientObject(_variant);
    };

    const handlechange1 = (e) => {
        setVarientObject({
            ...variant,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    };

    const handleVariantSubmit = (event) => {
        event.preventDefault();
        var _form = {
            color: variant.color,
            size: variant.size,
            finish_type: variant.finish_type,
            shipping: {
                required_shipping: Boolean(variant.required_shipping),
                charge_tax: Boolean(variant.charge_tax),
            },
            pricing: {
                price: variant.price,
                compare_at: variant.compare_at,
                handling_changes: variant.handling_changes,
                sales_price: variant.sales_price,
                charge_taxes: Boolean(variant.charge_taxes),
            },
            inventory: {
                sku: variant.sku,
                barcode: variant.barcode,
                min_purchase_qty: variant.min_purchase_qty,
                quantity: variant.quantity,
                remaining_quantity: variant.remaining_quantity,
                track_inventory: Boolean(variant.track_inventory),
            },
            attachment: selectedFile[parseInt(variant.imageInx)]
        }

        var _variant = [...variants]
        if (isEdit == true) {
            _variant[editIndex] = _form;
        } else {
            _variant.push(_form);
        }
        setVariants(_variant);
        console.log('variant', variant);
        console.log('_form', _form);
        console.log('variants list', variants);
        resetVarientObject();
        setShow(false)

    };

    const resetVarientObject = () => {
        var _variant = {
            imageInx: null,
            color: "",
            size: "",
            finish_type: "",
            price: "",
            compare_at: "",
            handling_changes: "",
            sales_price: "",
            required_shipping: false,
            charge_taxes: false,
            sku: "",
            barcode: "",
            min_purchase_qty: "",
            quantity: "",
            track_inventory: false,
            remaining_quantity: 5,
        }

        setVarientObject(_variant);
        setEditButton(false);
        setEditVarientIndex(0);
    };

    const editVarient = (data, index) => {
        setShow(true)
        var _variant = {
            imageInx: data?.imageInx,
            color: data?.color,
            size: data?.size,
            finish_type: data?.finish_type,
            price: data?.pricing?.price,
            compare_at: data?.pricing?.compare_at,
            handling_changes: data?.pricing?.handling_changes,
            sales_price: data?.pricing?.sales_price,
            required_shipping: data?.shipping?.required_shipping,
            charge_taxes: data?.pricing?.charge_taxes,
            sku: data?.inventory?.sku,
            barcode: data?.inventory?.barcode,
            min_purchase_qty: data?.inventory?.min_purchase_qty,
            quantity: data?.inventory?.quantity,
            track_inventory: data?.inventory?.track_inventory,
            remaining_quantity: 5,

        }
        setVarientObject(_variant);
        setEditButton(true);
        setEditVarientIndex(index);
    };
    const variantremove = (index) => {
        var _variant = [...variants]
        _variant.splice(index, 1);
        setVariants(_variant);
    };

    // file upload --state
    const [selectedFile, setSelectedFile] = useState([]);
    const [actualFiles, setActualFile] = useState([]);
    const [uploadFiles, setUploadFile] = useState([]);
    // file upload --functionality
    const handleFileInput = (e) => {
        // const files = e.target.files;
        const _files = Array.from(e.target.files);
        const _urls = [...actualFiles];
        const fileArray = selectedFile;
        const upload = uploadFiles;
        _files.forEach((file) => {
            upload.push(file);
            const reader = new FileReader();

            reader.onload = () => {
                _urls.push(reader.result);
                setActualFile(_urls);
            };

            reader.readAsDataURL(file);
        });
        for (let i = 0; i < _files.length; i++) {
            fileArray.push({
                name: _files[i].name,
                url: `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${_files[i].name}`,
                type: _files[i].type
            });
        }
        setSelectedFile(fileArray);
        setUploadFile(upload);
    };
    const uploadFile = () => {
        console.log('uploadFiles length', uploadFiles.length);
        for (let i = 0; i < uploadFiles.length; i++) {
            uploadImage(uploadFiles[i]);
        }
    };
    const removeImage = async (index) => {
        var selected = [...selectedFile];
        var actual = [...actualFiles];
        var uploads = [...uploadFiles];
        selected.splice(index, 1);
        actual.splice(index, 1);
        uploads.splice(index, 1);
        setActualFile(actual);
        setSelectedFile(selected);
        setUploadFile(uploads);
    }
    //product --state
    const [form, setProductForm] = useState({
        name: ""
    })
    const [productCategory, setproductCategory] = useState([])
    const [sellerList, setsellerList] = useState([])
    const [productTags, setproductTags] = useState([])
    const [selectedproductTags, setSelectedproductTags] = useState([])
    console.log(selectedproductTags)

    //product --functionality
    const handleChange = (e) => {
        const myData = { ...form };
        if (e.target.name == 'type') {
            var _pd = productCategory.find(x => x.name == e.target.value);
            var _type = {
                id: _pd ? _pd.id : 1,
                name: e.target.value
            }
            myData[e.target.name] = _type;
        } else {
            myData[e.target.name] = e.target.value;
        }
        setProductForm(myData);
    }
    const addProduct = async () => {
        const productdata = {
            seller_email: form.seller_email,
            name: form.name,
            // category: form.category,
            type: form.type,
            description: form.description,
            tags: selectedproductTags,
            policy: form.policy,
            shipping: form.shipping,
            pricing: { price: 100 },
            inventory: { quantity: 100 },
            handle: form.handle,
            meta_fields: {
                title: form.metatitle,
                description: form.metadescription,
            },
            attachments: selectedFile,
            // variant:form.tags,
            variant: variants,
            custom_fields: {},
            created_by: _json._id,
        }
        console.log(productdata);
        const response = await createData("admin/product/new", productdata);
        if (response.status === 201) {
            toast.success('Successfully Product Submitted');
            clearData();
            history.push('/addproductcard');
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        if (variants.length === 0) {
            toast.error("You have to add at least one variant")
            e.preventDefault()

        } else {
            e.preventDefault()
            addProduct()
            uploadFile()
        }
    }

    //reset all
    const clearData = () => {
        setProductForm({
            name: "",
            category: "",
            seller_email: "",
            description: "",
            policy: "",
            handle: "",
            metatitle: "",
            metadescription: ""
        });
        setActualFile([]);
        setUploadFile([]);
        setSelectedFile([]);
        setVariants([]);
        // getProductTags();
        resetVarientObject();

    }

    const handleTagChange = (event, index) => {
        var _list = [
            {
                id: 1,
                value: event.target.value
            }
        ]
        var _tags = selectedproductTags;
        _tags[index].list = _list;
        setSelectedproductTags(_tags);
    }
    const getProductTags = async () => {
        const response = await getAllData('master/product_tags');
        setproductTags(response.data.master[0].data);
        var _selectList = [];
        response.data.master[0].data.forEach(x => {
            _selectList.push({ id: x.id, name: x.name, list: [] })
        })
        setSelectedproductTags(_selectList);
    }
    // others
    //  const [productCategory, setproductCategory] = useState([])
    const getProductCategories = async () => {
        const response = await getAllData('master/product_category');
        setproductCategory(response.data.master[0].data);
    }

    useEffect(() => {
        getProductCategories()
        getProductTags()
    }, [])

    return (
        <>
            <Row>
                <Col lg={12}>
                    <NavbarStandard/>
                    {/* < SellerPortalHeader /> */}
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col lg={12}>

                    <Card className=''>
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='mt-2'>Add Product</h4>
                                    <Breadcrumb>
                                        <Breadcrumb.Item>Duplicate</Breadcrumb.Item>
                                        <Breadcrumb.Item>Preview</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                                <div>
                                    {''}
                                    {/* <Link to="/editproduct">
                                        <Button className='me-3 btn btn-warning d-block w-100'>Save as Draft</Button>
                                    </Link> */}
                                    {''}
                                </div>
                            </div>
                            <Container>
                                <Form onSubmit={(e) => { formsubmit(e) }}>
                                    <Row>
                                        <Col lg={7}>
                                            <Card className='mt-3 me-3'>
                                                <Card.Body>
                                                    <h5 className='mb-3'>Product Information</h5>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Name</Form.Label>
                                                        <Form.Control value={form.name} required name="name" onChange={(e) => { handleChange(e) }} type="text" className='w-100' />
                                                    </Form.Group>
                                                    <Row className="mb-3 g-3">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Description <span className='text-grey'>(Optional)</span></Form.Label>
                                                            <Form.Control value={form.description} required name="description" onChange={(e) => { handleChange(e) }} as="textarea" placeholder='Tag Your Description....' rows={8} />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3 g-3">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Return Policy <span className='text-grey'>(Optional)</span></Form.Label>
                                                            <Form.Control value={form.policy} required name="policy" onChange={(e) => { handleChange(e) }} as="textarea" placeholder='Tag Your Policy....' rows={8} />
                                                        </Form.Group>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                            <Card className='mt-3 me-3'>
                                                <Card.Body>
                                                    <h5 className='mb-3'>Organization</h5>
                                                    <Form.Group className='mb-3'>
                                                        <Form.Label>Seller Email</Form.Label>
                                                        <Form.Control value={form.seller_email} required name="seller_email" onChange={(e) => { handleChange(e) }} type="text" className='w-100' />
                                                    </Form.Group>
                                                    <Form.Group className='mb-3'>
                                                        <Form.Label>Category</Form.Label>
                                                        <Form.Select value={form.type?.name} required name="type" onChange={(e) => { handleChange(e) }}>
                                                            <option value="">Select</option>
                                                            {productCategory.map((data, key) => (
                                                                <option key={key} value={data.name}>
                                                                    {data.name}
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Card.Body>
                                            </Card>
                                            <Button onClick={handleShow} className='m-3 bg-transparent text-primary'>+ Add Variant</Button>
                                            <div>
                                                <table className="input-box-440">
                                                    <tbody >
                                                        {variants.map((data, index) => (
                                                            <tr>
                                                                {/* <td><img src={variant_image} className="sel_var_image" alt="selected-variant" /></td> */}
                                                                <td>
                                                                    <p className="cur-var-types">{data?.color} / {data?.size}  / {data?.finish_type} / {data?.quantity}</p>
                                                                    <p className="sku-price">Sku:{data?.inventory?.sku} / Price: £ {data?.pricing?.price}</p>
                                                                </td>
                                                                <td>
                                                                    <button className="edt-rem1" type="button" onClick={() => editVarient(data, index)} >Edit</button>
                                                                    <button onClick={() => { variantremove(index) }} type="button" className="edt-rem2">Remove</button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <Row>
                                                <Col>
                                                    {/* <Link to='/addproductcard'> */}
                                                    <Button type='submit' className='mt-3  btn text-light bg-success border-0'>Add Product</Button>
                                                    {/* </Link> */}
                                                    <Link to="/addproductcard">
                                                        <Button className='mt-3  btn text-light border-0 ms-5 bg-danger '>Cancel</Button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <div>

                                                {/* <Flex justifyContent={between}> */}
                                                <div className='d-flex justify-content-between'>
                                                    <Modal
                                                        show={show}
                                                        onHide={() => setShow(false)}
                                                        dialogClassName="modal-xl modal-90w"

                                                        aria-labelledby="example-custom-modal-styling-title"
                                                    >
                                                        <Modal.Header closeButton>
                                                            <Modal.Title id="example-custom-modal-styling-title">
                                                                Variant Details</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <Row>
                                                                <Col lg={6}>
                                                                    <Card className='mt-3  me-3'>
                                                                        <Card.Body>
                                                                            <div className='d-flex justify-content-between'>
                                                                                <h5 className='mb-3'>Variants</h5>

                                                                            </div>
                                                                            <h6 className='mt-3 mb-3'>OPTIONS</h6>
                                                                            <Row className="mb-3 g-3">
                                                                                <Form.Group as={Col} className='mb-3'>

                                                                                    {/* <Form.Select className='w-75'>
                                                                                    <option>Size</option>
                                                                                    <option>Colour</option>
                                                                                    <option>Material</option>
                                                                                    <option>Style</option>
                                                                                </Form.Select> */}
                                                                                    <Form.Label>Colour</Form.Label>
                                                                                </Form.Group>
                                                                                <Form.Group as={Col} className='mb-3'>
                                                                                    <Form.Control value={variant.color} required name="color" onChange={(e) => { variantChange(e) }} type="text" placeholder='Enter tags' className='w-100' />
                                                                                </Form.Group>
                                                                            </Row>
                                                                            <Row className="mb-3 g-3">
                                                                                <Form.Group as={Col} className='mb-3'>
                                                                                    <Form.Label>Size</Form.Label>
                                                                                    {/* <Form.Select className='w-75'>
                                                                                    <option>Size</option>
                                                                                    <option>Colour</option>
                                                                                    <option>Material</option>
                                                                                    <option>Style</option>
                                                                                </Form.Select> */}
                                                                                </Form.Group>
                                                                                <Form.Group as={Col} className='mb-3'>
                                                                                    <Form.Control value={variant.size} name="size" onChange={(e) => { variantChange(e) }} type="text" placeholder='Enter tags' className='w-100' />
                                                                                </Form.Group>
                                                                            </Row>
                                                                            <Row className="mb-3 g-3">
                                                                                <Form.Group as={Col} className='mb-3'>
                                                                                    <Form.Label>Finish Type</Form.Label>
                                                                                    {/* <Form.Select className='w-75'>
                                                                                    <option>Size</option>
                                                                                    <option>Colour</option>
                                                                                    <option>Material</option>
                                                                                    <option>Style</option>
                                                                                </Form.Select> */}
                                                                                </Form.Group>
                                                                                <Form.Group as={Col} className='mb-3'>
                                                                                    <Form.Control value={variant.finish_type} name="finish_type" onChange={(e) => { variantChange(e) }} type="text" placeholder='Enter tags' className='w-100' />
                                                                                </Form.Group>
                                                                            </Row>
                                                                            {/* <Button className='bg-transparent text-primary'>+ Add Option</Button> */}
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col lg={5}>
                                                                    <Card className='mt-3 me-3'>
                                                                        <Card.Body>
                                                                            <h5 className='mb-3'>Pricing</h5>
                                                                            <Form.Group className='mb-3'>
                                                                                <Form.Label>Pricing</Form.Label>
                                                                                <InputGroup className="mb-3">
                                                                                    <FormControl value={variant.price} name="price" onChange={(e) => { variantChange(e) }} placeholder='0.00' type="number" aria-label="Text input with dropdown button" />

                                                                                    <DropdownButton
                                                                                        variant="outline-secondary"
                                                                                        title="lb"
                                                                                        id="input-group-dropdown-2"
                                                                                        align="end"
                                                                                    >
                                                                                        <Dropdown.Item href="#">lb</Dropdown.Item>
                                                                                    </DropdownButton>
                                                                                </InputGroup>
                                                                            </Form.Group>
                                                                            <Form.Group className='mb-3'>
                                                                                <Form.Label>Compare Price</Form.Label>
                                                                                <Form.Control value={variant.compare_at} name="compare_at" onChange={(e) => { variantChange(e) }} type="number" className='w-100' />
                                                                            </Form.Group>
                                                                            <Form.Group className='mb-3'>
                                                                                <Form.Label>Handling Charges</Form.Label>
                                                                                <Form.Control value={variant.handling_changes} name="handling_changes" onChange={(e) => { variantChange(e) }} type="number" className='w-100' />
                                                                            </Form.Group>
                                                                            <Form.Group className='mb-3'>
                                                                                <Form.Label>Sales Price</Form.Label>
                                                                                <Form.Control value={variant.sales_price} name="sales_price" onChange={(e) => { variantChange(e) }} type="number" className='w-100' />
                                                                            </Form.Group>
                                                                            <Form.Group className='mb-3'>
                                                                                <Row>
                                                                                    <Col lg={5}>
                                                                                        <Form.Check checked={variant.required_shipping} name="required_shipping" onChange={handlechange1} />
                                                                                        <Form.Label>
                                                                                            Shipping Requires
                                                                                        </Form.Label>
                                                                                    </Col>
                                                                                    <Col lg={6}>
                                                                                        <Form.Check checked={variant.charge_taxes} name="charge_taxes" onChange={handlechange1} />
                                                                                        <Form.Label>
                                                                                            Charge Taxes on this product
                                                                                        </Form.Label>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Form.Group>
                                                                        </Card.Body>
                                                                    </Card>
                                                                    <Card className='mt-3 me-3'>
                                                                        <Card.Body>
                                                                            <h5 className='mb-3'>Inventory</h5>
                                                                            <Form.Group className='mb-3'>
                                                                                <Form.Label>SKU</Form.Label>
                                                                                <Form.Control value={variant.sku} name="sku" onChange={(e) => { variantChange(e) }} className='w-100' type="text" placeholder='eg.324812302' />
                                                                            </Form.Group>
                                                                            <Form.Group className='mb-3'>
                                                                                <Form.Label>Barcode</Form.Label>
                                                                                <Form.Control
                                                                                    value={variant.barcode} name="barcode" onChange={(e) => { variantChange(e) }}
                                                                                    className='w-100'
                                                                                    type="text"
                                                                                />
                                                                            </Form.Group>
                                                                            <Form.Group className='mb-3'>
                                                                                <Form.Label>Minimum Purchase Quantity</Form.Label>
                                                                                <Form.Control value={variant.min_purchase_qty} name="min_purchase_qty" onChange={(e) => { variantChange(e) }} type="number" className='w-100' />
                                                                            </Form.Group>
                                                                            <Form.Group className='mb-3'>
                                                                                <Form.Label>Quantity</Form.Label>
                                                                                <Form.Control value={variant.quantity} name="quantity" onChange={(e) => { variantChange(e) }} type="number" className='w-100' />
                                                                            </Form.Group>
                                                                            <Form.Group className='mb-3'>
                                                                                <Form.Check checked={variant.track_inventory} name="track_inventory" onChange={handlechange1} />
                                                                                <Form.Label>
                                                                                    Track this Product Inventory
                                                                                </Form.Label>
                                                                            </Form.Group>

                                                                            <Button type='button' onClick={(e) => { handleVariantSubmit(e) }} className='btn bg-success border border-0 m-3'>Submit</Button>

                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                            </Row>
                                                        </Modal.Body>
                                                    </Modal>

                                                </div>
                                                {/* </Flex> */}
                                            </div>
                                        </Col>
                                        <Col lg={5}>

                                            <Card className='mt-3'>
                                                <Card.Body>
                                                    {/* <Flex justifyContent={between}> */}
                                                    <h5 className='mb-3'>Media</h5>
                                                    {/* <div className='d-flex justify-content-between'>
                                                    <Button variant="primary" onClick={handleShow}>
                                                    Add Media from URL
                                                    </Button>
                                                    
                                                    <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                    <Modal.Title>Enter or Paste the URL</Modal.Title>
                                                    </Modal.Header>
                                                        <Modal.Body>
                                                            <Form.Control type='text' className='w-100 mb-3' />
                                                            <Button className='btn btn-outline-success text-light'>Submit</Button>
                                                            </Modal.Body>
                                                            </Modal>
                                                            
                                                        </div> */}
                                                    {/* </Flex> */}
                                                    <div className='mt-3 border-secondary w-100'>
                                                        <small className='d-block text-align-center'>
                                                            Drag and Drop
                                                            Your Files Here
                                                        </small>
                                                        <label htmlFor="select-basic" >
                                                            <Button className='mt-3 btn text-light btn-outline-secondary' onClick={() => document.getElementById('select-basic').click()}>Browse Files</Button>
                                                            <input
                                                                name="attachments"
                                                                multiple
                                                                onChange={handleFileInput}
                                                                type="file"
                                                                id="select-basic"
                                                                accept="image/*"
                                                                style={{ display: "none" }}
                                                            />
                                                        </label>
                                                        {actualFiles.map((file, index) => (
                                                            <>
                                                                <div className="row bg-pre mt-3">
                                                                    <div className="col-4">
                                                                        <img src={file} width="50px" height="50px" className="pro-pre" />
                                                                    </div>
                                                                    <div className="col-4 fil-name">{selectedFile[index]?.name}</div>
                                                                    <div className="col-4 ">
                                                                        <div className="m-3 text-end">
                                                                            <i className="ri-close-line upload-img-close3" onClick={(e) => { removeImage(index) }}></i>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </>
                                                        ))}
                                                    </div>
                                                </Card.Body>
                                            </Card>

                                            <Card className='mt-3'>
                                                <Card.Body>
                                                    <h5 className='mb-3'>Product Handle and Metafields</h5>
                                                    <Form.Group className='mb-4'>
                                                        <Form.Label>
                                                            Product handle
                                                        </Form.Label>
                                                        <Form.Control value={form.handle} required name="handle" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                                    </Form.Group>
                                                    <h5 className='mb-3'>Product Metafields</h5>
                                                    <Form.Group className='mb-3'>
                                                        <Form.Label>
                                                            Title Tag Meta Field
                                                        </Form.Label>
                                                        <Form.Control value={form.metatitle} required name="metatitle" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                                    </Form.Group>
                                                    <Form.Group className='mb-3'>
                                                        <Form.Label>
                                                            Description Tag Meta Field
                                                        </Form.Label>
                                                        <Form.Control value={form.metadescription} required name="metadescription" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                                    </Form.Group>
                                                </Card.Body>
                                            </Card>
                                            <Card className='mt-3'>

                                                <Card.Body>
                                                    <h5 className='mb-3'>Product Tag</h5>
                                                    {productTags.map((x, i) => {
                                                        const defaultSelectedValues = selectedproductTags[i]?.list || [];
                                                        console.log(defaultSelectedValues)
                                                        return <Form.Group className='mb-3'>
                                                            <Form.Label>{x?.name}</Form.Label>
                                                            {<Form.Control className="ai-input w-100" value={selectedproductTags[i]?.list[0]?.value} onChange={(e) => { handleTagChange(e, i) }} placeholder={`Enter ${x?.name}`} name={`tagname_${i}`} id={`tagname_${i}`} type="text" />}
                                                        </Form.Group>
                                                    })}

                                                    {/* <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Category
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Colour
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Finish Type
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Length
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Width
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Thickness
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Pattern
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Stock Location
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Origin
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Offers
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group> */}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Form>
                            </Container>
                        </Card.Body >
                    </Card>
                </Col>
                <Toaster />
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}
export default FrontendAddProduct;