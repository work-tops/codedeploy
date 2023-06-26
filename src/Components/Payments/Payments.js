import { Row, Col } from "react-bootstrap"
import AdminHeader from "../Menubar/AiMenu"
import Payments from "./AdminPaymentDetails"
function AdminPayment() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader/>
                </Col>
                <Col lg={12} className="mt-4 container mb-3">
                    <Payments/>
                </Col>
            </Row>
        </>
    )
}
export default AdminPayment