import React, { useState } from "react";
import { useEffect } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { uploadImage } from "../../Services/ImageService";
import { createData, getAllData } from "../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import product_image from '../../Images/employee.png'
import Multiselect from "multiselect-react-dropdown";
import SkillsMultiselectDropdown from "../SelectTag/SelectTag";

function AiFreelancer() {

    const [form, setform] = useState([])
    const [selectedItems, setSelectedItems] = useState([]);
    const [freel, setfreel] = useState([])
    const [skill, setskill] = useState([])
    const [doctype, setdoctype] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])

    useEffect(() => {
        attachmentsList()
    }, [])

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData)
    }

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
            name: form.name + " " + form.lastname,
            type: selectedItems,
            skills: selectedSkills,
            shop_name: form.shop_name,
            email: form.email,
            store_address: form.store_address,
            city: "default",
            zipcode: "default",
            country: "default",
            billing_address: form.sbilling_address,
            // city: form.city,
            // country: form.country,
            // zipcode: form.zipcode,
            contact: form.contact,
            tags: form.tags,
            store_description: form.store_description,
            seller_description: form.seller_description,
            policy: form.policy,
            password: form.password,
            confirm_password: form.confirm_password,
            extra_information: {
                company_name: "test option",
                mobile_number: "test value",
                company_address: "test option",
                varification_doc: "test.jpg",
                id_proof: "test.jpg",
                bank_details: "test.jpg",
                others: "test.jpg",
                ternsandconfition: true
            },
            created_by: "1",
            attachments: selectedFile
        }
        console.log('add freelancer obj', freelancerData);
        const response = await createData("seller/new", freelancerData)
        if (response.status === 201) {
            toast.success('Successfully Freelancer Added')
            setform("")
            cleardata()
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
    const filteredOptions = doctype.filter(option =>
        !selectedValues.includes(option.value) && option.value.toLowerCase().includes(searchValue.toLowerCase())
    );



    const cleardata = () => {
        setform({
            name: "",
            lastname: "",
            dob: "",
            skills: "",
            billing_address: "",
            shop_name: "",
            email: "",
            store_address: "",
            city: "",
            country: "",
            zipcode: "",
            contact: "",
            tags: "",
            store_description: "",
            seller_description: "",
            policy: "",
            password: "",
            confirm_password: ""
        })
        setSelectedSkills([]);
    }

    useEffect(() => {
        freelancetype()
        Sellerskills()
        freelancedoctype()
    }, [])

    // Skills


    return (
        <>
            <div className="row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div>
                        <AiHeader />
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

                                            </>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}
export default AiFreelancer