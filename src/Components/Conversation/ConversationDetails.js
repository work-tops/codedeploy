import React, { useRef } from "react";
import AdminHeader from "../Menubar/AiMenu"
import { Row, Col, Card } from "react-bootstrap"
import trader from '../../User-Portal/Components/Projectimages/trainer.png'
import owner from '../../User-Portal/Components/Projectimages/BathroomFitting.jpg'
import { Editor } from "@tinymce/tinymce-react";

function ConversationDetails() {

    const editorRef = useRef(null);
    return (
        <>
            {/*  */}
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12} className="container mt-4">
                    <Row className="">
                        <Col lg={8}>
                            <div class="">
                                <div style={{ background: '#f9fafd' }} class="kanban-column-header">
                                    <div >
                                        <h5 class="fs-0 mt-2">Conversation <span class="text-500">(4)</span></h5>
                                        <p className="mt-2 text-primary fs--1">Here is the Details of the query Conversation</p>
                                    </div>
                                </div>
                                <div class="kanban-items-container scrollbar" tabindex="0">
                                    <div class="kanban-item" tabindex="0">
                                        <div class="card kanban-item-card hover-actions-trigger">
                                            <div style={{ background: '#f3f3f3' }} class="card-body">
                                                <div class="position-relative mb-1">
                                                    <span>21 March 2023</span>,<span>00:00</span>
                                                </div>
                                                <p class="mb-0 fs--1 fw-medium font-sans-serif stretched-link" data-bs-toggle="modal" data-bs-target="#kanban-modal-1">Add a cookie notice, which will be shown at the bottom of the page and has a link of "Privacy Policy"</p>
                                                <div class="kanban-item-footer cursor-default">
                                                    <div class="z-index-2">
                                                        <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                            <img class="rounded-circle" src={trader} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kanban-item" tabindex="0">
                                        <div class="card kanban-item-card hover-actions-trigger">
                                            <div style={{ background: '#f3f3f3' }} class="card-body">
                                                <div class="position-relative mb-1">
                                                    <span>21 March 2023</span>,<span>00:00</span>
                                                </div>
                                                <p class="mb-2 fs--1 fw-medium font-sans-serif stretched-link" data-bs-toggle="modal" data-bs-target="#kanban-modal-1">Add a cookie notice, which will be shown at the bottom of the page and has a link of "Privacy Policy"</p>
                                                <a href={owner}>
                                                    <img src={owner} width={"50px"} height={"50px"} />
                                                </a>
                                                <div class="kanban-item-footer cursor-default">
                                                    <div class="z-index-2">
                                                        <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                            <img class="rounded-circle" src={owner} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="kanban-column-footer mb-3">
                                    <form class="add-card-form mt-3">
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            initialValue=""

                                            init={{

                                                height: 200,
                                                menubar: false,
                                                // plugins: [
                                                //     'advlist autolink lists link image charmap print preview anchor',
                                                //     'searchreplace visualblocks code fullscreen',
                                                //     'insertdatetime media table paste code help wordcount'
                                                // ],
                                                toolbar: 'undo redo | formatselect | ' +
                                                    'bold italic  | alignleft aligncenter ' +
                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                    'removeformat ',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                            }}
                                        />
                                        <div class="d-flex gap-2 justify-content-end">
                                            <div><button class="btn btn-primary btn-sm mt-3" type="button">Attachments</button></div>
                                            <div><button class="btn btn-primary btn-sm mt-3" type="button">Send</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Card className="">
                                <Card.Header className="bg-light" as={"h5"}>
                                    Enquiry Details
                                    <p className="mt-2 text-primary fs--1">Here is the Enquiry Details</p>
                                </Card.Header>
                                <Card.Body>
                                    <p className="fs--1"><span className="fw-bold">ENQUIRY ID - </span><span className="fw-semibold">#12345</span></p>
                                    <p className="fs--1"><span className="fw-bold">CUSTOMER NAME - </span><span className="fw-semibold">Peter Leverkus</span></p>
                                    <p className="fs--1"><span className="fw-bold">TRADER NAME - </span><span className="fw-semibold">Gms</span></p>
                                    <p className="fs--1"><span className="fw-bold">QUERY TITLE - </span><span className="fw-semibold">Facebook</span></p>
                                    <p className="fs--1"><span className="fw-bold">STATUS - </span><span className="badge bg-success fw-semibold">Open</span></p>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </>
    )
}
export default ConversationDetails