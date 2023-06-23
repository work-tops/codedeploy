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
                                                    <div class="text-500 z-index-2"><span class="me-2" data-bs-toggle="tooltip" aria-label="You're assigned in this card" data-bs-original-title="You're assigned in this card">{/* <svg class="svg-inline--fa fa-eye fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg> */}<span class="fas fa-eye"></span></span><span class="me-2" data-bs-toggle="tooltip" data-bs-original-title="Checklist">{/* <svg class="svg-inline--fa fa-check fa-w-16 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> */}<span class="fas fa-check me-1"></span></span></div>
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
                                                    <div class="text-500 z-index-2"><span class="me-2" data-bs-toggle="tooltip" aria-label="You're assigned in this card" data-bs-original-title="You're assigned in this card">{/* <svg class="svg-inline--fa fa-eye fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg> */}<span class="fas fa-eye"></span></span><span class="fas fa-paperclip me-1"></span><span>1</span><span class="me-2" data-bs-toggle="tooltip" data-bs-original-title="Checklist">{/* <svg class="svg-inline--fa fa-check fa-w-16 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> */}<span class="fas fa-check me-1"></span></span></div>
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