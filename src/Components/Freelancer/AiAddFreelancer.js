import React, { useState } from "react";
import { useEffect } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { uploadImage } from "../../Services/ImageService";
import { createData, getAllData, updateData } from "../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import product_image from '../../Images/employee.png'
import Multiselect from "multiselect-react-dropdown";
import { useHistory } from 'react-router-dom';

function AiFreelancer() {

    // Secondary Skill static data 

    const Secondarydata = [
        {
            Skills: 'HTML', id: 1
        },
        {
            Skills: 'CSS', id: 2
        },
        {
            Skills: 'Java', id: 3
        },
        {
            Skills: 'React', id: 4
        },
        {
            Skills: 'BootStrap', id: 5
        },
    ]

    const history = useHistory();
    const [form, setform] = useState([])
    console.log(form)
    const [selectedItems, setSelectedItems] = useState([]);
    console.log(selectedItems)
    const [freel, setfreel] = useState([])
    const [skill, setskill] = useState([])
    const [doctype, setdoctype] = useState([])
    console.log(doctype)
    const [selectedSkills, setSelectedSkills] = useState([])
    console.log(selectedSkills)
    const [address, setAddress] = useState(false);

    // {form.company_address === form.billing_address ? setAddress(true) : setAddress(false)}

    console.log(address)

    useEffect(() => {
        if (form.company_address === form.billing_address) {
            setAddress(true);
        } else {
            setAddress(false);
        }
        attachmentsList()
    }, [])

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData)
    }

    const handlechange1 = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    };

    // upload images

    const [selectedFile, setSelectedFile] = useState([]);
    const [uploadFiles, setUploadFile] = useState([]);

    const attachmentsList = () => {
        const _obj = {
            "document_type": "",
            "name": "",
            "url": "",
            "type": ""
        };
        var _objList = [];
        for (var i = 0; i < 5; i++) {
            _objList.push(_obj);
        }
        console.log(_objList.length);
        setSelectedFile(_objList);
    }
    const handleSelectChange = (event, inx) => {
        const _value = event.target.value;
        var allSelected = [...selectedFile];
        const oneSelected = {
            "document_type": _value,
            "name": "",
            "url": "",
            "type": ""
        };
        allSelected[inx] = oneSelected;
        setSelectedFile(allSelected);
        console.log('select index', inx);
        console.log(selectedFile);
    };
    const handleFileInput = (e, inx) => {
        console.log('file index', inx);
        const file = e.target.files[0];
        var _files = [...uploadFiles];
        _files.push(file);
        setUploadFile(_files);

        var _selectFiles = [...selectedFile];
        const oneSelected = {
            "document_type": _selectFiles[inx].document_type,
            "name": file.name,
            "url": `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${file.name}`,
            "type": file.type
        };
        _selectFiles[inx] = oneSelected;
        setSelectedFile(_selectFiles);
        console.log(selectedFile);
    };

    const uploadFile = () => {
        console.log('uploadFiles length', uploadFiles.length);
        for (let i = 0; i < uploadFiles.length; i++) {
            uploadImage(uploadFiles[i]);
        }
    };
    const removeImage = (index) => {
        var uploads = [...uploadFiles];
        uploads.splice(index, 1);
        setUploadFile(uploads);

        var selected = [...selectedFile];
        selected[index].document_type = '';
        selected[index].name = '';
        selected[index].url = '';
        selected[index].type = '';
        setSelectedFile(selected);
    };

    // const handleChange1 = (e) => {
    //     const myData = { ...form };
    //     myData[e.target.name] = e.target.checked;
    //     setform(myData);
    // }

    const onSelect = (selectedList, selectedItem) => {
        setSelectedSkills([selectedList]);
    }

    const onRemove = (selectedList, removedItem) => {
        setSelectedSkills([selectedList]);
    }


    const handleChange1 = (e) => {
        const itemId = parseInt(e.target.value);
        const checked = e.target.checked;

        if (checked) {
            setSelectedItems((prevSelected) => [
                ...prevSelected,
                freel.find((item) => item.id === itemId),
            ]);
        } else {
            setSelectedItems((prevSelected) =>
                prevSelected.filter((item) => item.id !== itemId)
            );
        }
    };

    const AddFreelancer = async () => {
        const freelancerData = {
            name: form.first_name + " " + form.last_name,
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            phone: form.phone,
            password: form.password,
            confirm_password: form.confirm_password,
            dob: form.dob,
            operate_as: form.operate_as,
            business_name: form.business_name,
            no_of_employees: form.no_of_employees,
            role: "Freelancer",
            type: selectedItems,
            primary_skill: form.primary_skill,
            skills: selectedSkills,
            company_address: form.store_address,

            billing_address: address.address == true ? form.company_address : form.billing_address,
            // billing_address: form.sbilling_address,
            description: form.description,
            terms_and_condition: true,
            is_active: true,
            is_approved: true,
            created_by: "1",
            attachments: selectedFile
        }
        console.log('add freelancer obj', freelancerData);
        var response = null;
        if (edituserid != '') {
            response = await updateData("admin/user/" + edituserid, freelancerData)
        } else {
            response = await createData("register", freelancerData)
        }

        if (response.status === 201) {
            toast.success('Successfully Freelancer Added')
            setform("");
            cleardata();
            history.push('/allfreelancer');
        } else {
            toast.error('Something went wrong')
        }
        console.log(response);
    }

    const formsubmit = (e) => {
        e.preventDefault()
        uploadFile()
        AddFreelancer()
    }

    const freelancetype = async () => {
        const response = await getAllData('master/freelance_type');
        setfreel(response.data.master[0].data);
    }

    const Sellerskills = async () => {
        const response = await getAllData('master/skills');
        setskill(response.data.master[0].data);
    }

    const freelancedoctype = async () => {
        const response = await getAllData('master/freelancer_document_type');
        setdoctype(response.data.master[0].data);
    }

    const [selectedValues, setSelectedValues] = useState([]);
    const docValue = selectedValues.join(', ');
    const [searchValue, setSearchValue] = useState('');
    // const filteredOptions = doctype.filter(option =>
    //     !selectedValues.includes(option.value) && option.value.toLowerCase().includes(searchValue.toLowerCase())
    // );

    // Freelance by id
    const getFreelanceById = async (_id) => {
        const response = await getAllData('admin/user/' + _id);
        const _userdata = response.data.user;
        console.log(_userdata)
        setform({
            // name: _userdata.first_name + " " + _userdata.last_name,
            first_name: _userdata.first_name,
            last_name: _userdata.last_name,
            email: _userdata.email,
            phone: _userdata.phone,
            password: _userdata.password,
            confirm_password: _userdata.confirm_password,
            dob: (_userdata.dob).slice(0, 10),
            operate_as: _userdata.operate_as,
            business_name: _userdata.business_name,
            no_of_employees: _userdata.no_of_employees,
            role: "Freelancer",
            type: _userdata.type,
            primary_skill: _userdata.primary_skill,
            skills: selectedSkills,
            billing_address: address.address == true ? _userdata.company_address : _userdata.billing_address,
            company_address: _userdata.company_address,
            // billing_address: _userdata.billing_address,
            description: _userdata.description,
            attachments: _userdata.attachments,

        });
        // setproductCategory([_product.type])
        setfreel(_userdata.type);
        setSelectedFile(_userdata.attachments);
        // setdoctype(_userdata.attachments)
        // _userdata.attachments.map((data) => (
        //     setdoctype(data.document_type)
        //     // console.log(data.document_type)
        // ))

        // setSelectedproductTags(_product.tags);
        // setproductTags(_product.tags);
        // console.log(_product.tags)
        // var _actFiles = [];
        // _product.attachments.forEach((x) => {
        //     _actFiles.push(x.url);
        // })
        // setActualFile(_actFiles);
        // setVariants([_product.variant]);
    }

    const cleardata = () => {
        setform({
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            dob: "",
            operate_as: "",
            skills: "",
            billing_address: "",
            no_of_employees: "",
            shop_name: "",
            company_address: "",
            business_name: "",
            city: "",
            country: "",
            zipcode: "",
            contact: "",
            tags: "",
            description: "",
            seller_description: "",
            policy: "",
            password: "",
            confirm_password: ""
        })
        setSelectedSkills([]);
    }

    const [edituserid, setEdituserid] = useState('');
    console.log(edituserid)

    useEffect(() => {
        var query = window.location.search.substring(1);
        freelancetype()
        Sellerskills()
        freelancedoctype()
        if (query) {
            getFreelanceById(query);
            setEdituserid(query);
        }
    }, [])



    return (
        <>
            <div className="row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div>
                        <AiHeader />
<<<<<<< HEAD
                        <div className="content-div">
                            <div>
                                <p className="capital-title">Freelancer/Add Freelancer</p>
                                <h4 className="Capitalize-title">Add Freelancer</h4>
                                <p className="med-sub-title">Here you can add your freelancer</p>
                                <form onSubmit={(e) => { formsubmit(e) }} className="add-seller-form">
                                    <div className="d-inline-block">
                                        <label className="label-name">First Name</label>
                                        <input required name="name" value={form.name} onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='text' />

                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Last Name</label>
                                        <input required name="lastname" value={form.lastname} onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='text' />

                                    </div>
                                    <div></div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Email</label>
                                        <input required name="email" value={form.email} onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='email' />
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Phone Number</label>
                                        <input required name="contact" value={form.contact} onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='number' />
                                    </div>
                                    <div></div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Date of Birth</label>
                                        <input required name="dob" value={form.dob} onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='date' />
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">You Operate as a</label>
                                        <select className="input-focus Dropdown-box-200">
                                            <option>Select</option>
                                            <option>Self-employed / Sole Trader</option>
                                            <option>Limited Company</option>
                                            <option>Ordinary Partnership</option>
                                            <option>Limited Partnership</option>
                                        </select>
                                    </div>
                                    <div></div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Bussiness Name</label>
                                        <input required name="shop_name" value={form.shop_name} onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='text' />
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">No.of Employee</label>
                                        <select className="input-focus Dropdown-box-200">
                                            <option>Select</option>
                                            <option>Myself Only</option>
                                            <option>2-5</option>
                                            <option>6-10 </option>
                                            <option>10+</option>
                                        </select>
                                    </div>
                                    <label className="label-name">Skills:</label>
                                    <div className="input-focus Dropdown-box-300">
                                        <Multiselect options={skill} onSelect={onSelect} onRemove={onRemove} displayValue="value" />
                                    </div>
                                    <label className="label-name">Primary Skill</label>
                                    <select className="Dropdown-box-440">
                                        <option>Select</option>
                                        <option>Skill 1</option>
                                        <option>Skill 2</option>
                                        <option>Skill 3</option>
                                        <option>Skill 4</option>
                                    </select>

                                    <label className="label-name">Secondary Skill</label>
                                    <div className="input-focus Dropdown-box-440">
                                        <SkillsMultiselectDropdown />
                                    </div>
                                    <label className="label-name">Company Address</label>
                                    <textarea required name="store_address" value={form.store_address} onChange={(e) => { handleChange(e) }} className="input-focus textarea-2"></textarea>
                                    <label className="label-name">
                                        Billing Address <input type='checkbox' id="bill-check" />
                                        <span className="billing-add-note">{' '}address and the billing address are same.</span>
                                    </label>
                                    <textarea required name="sbilling_address" value={form.sbilling_address} onChange={(e) => { handleChange(e) }} className="input-focus textarea-2"></textarea>
                                    <label className="label-name">Description</label>
                                    <textarea required name="store_description" value={form.store_description} onChange={(e) => { handleChange(e) }} className="input-focus d-block textarea-2"></textarea>
                                    <div className="d-inline-block">
                                        <label className="label-name">Password</label>
                                        <input required name="password" value={form.password} onChange={(e) => { handleChange(e) }} className="input-box-200 input-focus" type='password' />

                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Confirm Password</label>
                                        <input required name="confirm_password" value={form.confirm_password} onChange={(e) => { handleChange(e) }} className="input-box-200 input-focus" type='password' />
                                    </div>
                                    <div>
                                        <input className="terms-conditions" type='checkbox' /><span className="agree-note">You agree to the terms and conditions.</span>
                                    </div>

                                    <button type="submit" className="create-btn">Create Account</button>
                                    <Link to="allfreelancer" role="button"><button className="remove-btn">Cancel</button></Link>
                                </form>
                            </div>
                            <div className="row">
                                <div className="freelance-form-div col-12">
                                    <form className="freelance-form">
                                        <h5 className="form-title">Freelancer Type</h5>
                                        <div>
                                            <input type='checkbox' className="mrgn" /><span>Fabricators</span>
                                        </div>
                                        <div>
                                            <input type='checkbox' className="mrgn" /><span>Kitchen Designer</span>
                                        </div>
                                        <div>
                                            <input type='checkbox' className="mrgn" /><span>Interior Designer</span>
                                        </div>
                                        <div>
                                            <input type='checkbox' className="mrgn" /><span>Stone Seller</span>
                                        </div>
                                        <div>
                                            <input type='checkbox' className="mrgn" /><span>Slink Manufacture</span>
                                        </div>
                                        <div>
                                            <input type='checkbox' className="mrgn" /><span>Tap Seller</span>
                                        </div>
                                        <div>
                                            <input type='checkbox' className="mrgn" /><span>Construction Company</span>
                                        </div>
                                    </form>
                                </div>
                                <div className="freelance-form-div col-12">
                                    <form className="freelance-form1">
                                        <h5 className="form-title">Documents</h5>

                                        {selectedFile.map((x, i) =>
                                            <>
                                                <select name={'select_' + i} onChange={(e) => handleSelectChange(e, i)} className="frl-proof-sel">
                                                    <option value="">Select</option>
                                                    {filteredOptions.map((data, key) => (
                                                        <option key={'doc_' + key} value={data.value}>{data.value}</option>
                                                    ))}
                                                </select>

                                                <label htmlFor="select-basic" className="d-block mb-75 me-75" style={{ fontSize: "small", color: "blue" }}>
                                                    <button type="button" className="upload-doc-btn ms-2" onClick={() => document.getElementById(`doc_attach_id_${i}`).click()}>
                                                        Upload
                                                    </button>

                                                    <input
                                                        name={'doc_attach_' + i}
                                                        // multiple
                                                        onChange={(e) => handleFileInput(e, i)}
                                                        required
                                                        type="file"
                                                        id={'doc_attach_id_' + i}
                                                        accept="image/*"
                                                        style={{ display: "none" }}
                                                    />
                                                </label>

                                                {x.name != '' && x.name != undefined ?
                                                    (<div key={'dic_key' + i}>
                                                        <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                                        <span className="kitchen-plan-div">{x.name}</span>
                                                        <i className="ri-close-line upload-img-close3" onClick={() => removeImage(i)}></i>
                                                    </div>) : <></>
                                                }
=======
                        <form onSubmit={(e) => { formsubmit(e) }}>
                            <div className="content-div">
                                <div>
                                    <p className="ai-title">Freelancer/Add Freelancer</p>
                                    <p className="ai-add-title">Add Freelancer</p>
                                    <p className="ai-title-desc">Here you can add your freelancer</p>
                                    <br></br>
                                    <div className="add-seller-form">
                                        <span className="category">First Name</span> <span className="seller-email">Last Name</span>
                                        <br></br>
                                        <input required name="first_name" value={form.first_name} onChange={(e) => { handleChange(e) }} id="aipro-category" type='text' />
                                        <input required name="last_name" value={form.last_name} onChange={(e) => { handleChange(e) }} id="aipro-email" type='text' />
                                        <br></br>
                                        <span className="category">Email</span> <span className="seller-ph-no">Phone Number</span>
                                        <br></br>
                                        <input required name="email" value={form.email} onChange={(e) => { handleChange(e) }} id="aipro-email" type='email' />
                                        <input required name="phone" value={form.phone} onChange={(e) => { handleChange(e) }} id="aipro-category" type='number' />
                                        <br></br>
                                        <span className="category">Date of Birth</span> <span className="frl-sector">You Operate as a</span>
                                        <br></br>
                                        <input required name="dob" value={form.dob} onChange={(e) => { handleChange(e) }} id="aipro-email" type='date' />
                                        <select name="operate_as" value={form.operate_as} onChange={(e) => { handleChange(e) }} className="select-category">
                                            <option>Select</option>
                                            <option value="">Self-employed / Sole Trader</option>
                                            <option value="Limited Company">Limited Company</option>
                                            <option value="Ordinary Partnership">Ordinary Partnership</option>
                                            <option value="Limited Partnership">Limited Partnership</option>
                                        </select>
                                        <br></br>
                                        <span className="category">Bussiness Name</span> <span className="noe">No.of Employee</span>
                                        <br></br>
                                        <input required name="business_name" value={form.business_name} onChange={(e) => { handleChange(e) }} id="aipro-category" type='text' />
                                        <select name="no_of_employees" value={form.no_of_employees} onChange={(e) => { handleChange(e) }} className="select-category">
                                            <option value="">Select</option>
                                            <option value="Myself Only">Myself Only</option>
                                            <option value="2-5">2-5</option>
                                            <option value="6-10">6-10 </option>
                                            <option value="10+">10+</option>
                                        </select>
                                        <br></br>
                                        <label className="label">Primary Skills:</label>

                                        <select name="primary_skill" value={form.primary_skill} onChange={(e) => { handleChange(e) }} className="select-category">
                                            <option value="">Select</option>
                                            {skill.map((data, key) => (
                                                <option key={key} value={data.value}>{data.value}</option>
                                            ))}
                                        </select>

                                        <label className="label">Secondary Skill</label>
                                        <div className="multi-sel-service">
                                            <Multiselect options={skill} onSelect={onSelect} onRemove={onRemove} displayValue="value" />
                                        </div>
>>>>>>> e0004006ea07582a2c3865e1d43edd5268976858

                                        <label>Company Address</label>
                                        <textarea required name="company_address" value={form.company_address} onChange={(e) => { handleChange(e) }} id="aipro-description"></textarea>

                                        <label>
                                            Billing Address <input checked={address.address} name="address" onChange={handlechange1} type='checkbox' id="bill-check" />
                                            <span className="billing-add-note">{' '}address and the billing address are same.</span>
                                        </label>

                                        {address.address == true || address == true ? (
                                            <textarea disabled required name="billing_address" value={form.company_address} onChange={(e) => { handleChange(e) }} id="aipro-description"></textarea>

                                        ) : (
                                            <textarea required name="billing_address" value={form.billing_address} onChange={(e) => { handleChange(e) }} id="aipro-description"></textarea>
                                        )}
                                        <label>Description</label>
                                        <textarea required name="description" value={form.description} onChange={(e) => { handleChange(e) }} id="aipro-description"></textarea>
                                        <br></br>
                                        <span className="category">Password</span> <span className="seller-email">Confirm Password</span>
                                        <br></br>
                                        <input required name="password" value={form.password} onChange={(e) => { handleChange(e) }} id="aipro-category" type='password' />
                                        <input required name="confirm_password" value={form.confirm_password} onChange={(e) => { handleChange(e) }} id="aipro-email" type='password' />
                                        <br></br>
                                        <input required name="termsandcond" value={form.termsandcond} onChange={(e) => { handleChange(e) }} id="terms-conditions" type='checkbox' /><span className="agree-note">You agree to the terms and conditions.</span>
                                        <br></br>
                                        <button type="submit" className="create-acc-btn">Create Account</button>
                                        <Link to="allfreelancer" role="button"><button className="cancel-btn">Cancel</button></Link>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="freelance-form-div col-12">
                                        <div className="freelance-form">
                                            <h5 className="form-title">Freelancer Type</h5>
                                            {freel.map((data, key) => (
                                                < div style={{ marginLeft: "15px" }}>
                                                    <input
                                                        value={data.id}
                                                        name="type"
                                                        onChange={handleChange1}
                                                        type="checkbox"
                                                        id={`ff-chbox-${data.id}`}
                                                    />
                                                    <label htmlFor={`ff-chbox-${data.id}`}>{data.value}</label>
                                                    <br />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="freelance-form-div col-12">
                                        <div className="freelance-form1">
                                            <h5 className="form-title">Documents</h5>
                                            <br></br>
                                            {selectedFile.map((x, i) =>
                                                <>
                                                    <select value={x.document_type} name={'select_' + i} onChange={(e) => handleSelectChange(e, i)} className="frl-proof-sel">
                                                        <option value="">Select</option>
                                                        {doctype.map((data, key) => (
                                                            <option key={'doc_' + key} value={data.value}>{data.value}</option>
                                                        ))}
                                                    </select>

                                                    <label htmlFor="select-basic" className="mb-75 me-75" style={{ fontSize: "small", color: "blue" }}>
                                                        <button type="button" className="upload-doc-btn ms-2" onClick={() => document.getElementById(`doc_attach_id_${i}`).click()}>
                                                            Upload
                                                        </button>

                                                        <input
                                                            name={'doc_attach_' + i}
                                                            // multiple
                                                            onChange={(e) => handleFileInput(e, i)}
                                                            // required
                                                            type="file"
                                                            id={'doc_attach_id_' + i}
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                        />
                                                    </label>
                                                    <br></br>
                                                    {x.name != '' && x.name != undefined ?
                                                        (<div key={'dic_key' + i}>
                                                            <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                                            <span className="kitchen-plan-div">{x.name}</span>
                                                            <i className="ri-close-line upload-img-close3" onClick={() => removeImage(i)}></i>
                                                        </div>) : <></>
                                                    }

                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}
export default AiFreelancer