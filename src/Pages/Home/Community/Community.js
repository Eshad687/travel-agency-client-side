
import { Container, Row, Col } from 'react-bootstrap';
import './Community.css';



const Community = () => {

    return (
        <div id="community" className="mt-5 bg-info text-white">
            <Container className="py-5 mb-5">
                <h1 className="fw-bolder text-center border-bottom">OUR <span className="text-danger">COMMUNITY</span> </h1>

                {/* COMMUNITY INFORMATION */}
                <Row className="mt-5 text-center">
                    <Col sm={6} md={3} >
                        <div className=" community-one rounded py-5 my-3 card">
                            <h3>57k</h3>
                            <h2>Tourists</h2>
                        </div>
                    </Col>
                    <Col sm={6} md={3} >
                        <div className=" community-two rounded  py-5 my-3 card">
                            <h3>123k</h3>
                            <h2>Subscribers</h2 >
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className=" community-three rounded  py-5 my-3 card">
                            <h3>300</h3>
                            <h2>Hotels</h2>
                        </div>
                    </Col>
                    <Col sm={6} md={3} >
                        <div className=" community-four rounded py-5 my-3 card">
                            <h3>700</h3>
                            <h2>Restaurants</h2>
                        </div>
                    </Col>
                </Row>

                {/* COMMUITY IMAGES */}
                <Row>
                    <Col md={4}>
                        <img className="w-100 community-img my-3 card" height="300px" src="https://image.freepik.com/free-vector/eco-tourism-concept_23-2148628567.jpg" alt="" />
                    </Col>
                    <Col md={4}>
                        <img className="w-100 community-img my-3 card" height="300px" src="https://image.freepik.com/free-vector/boarding-passenger-ship-harbour-ferry-arriving-pier-dock-travelling-holidays_225067-116.jpg" alt="" />
                    </Col>
                    <Col md={4}>
                        <img className="w-100 community-img my-3 card" height="300px" src="https://image.freepik.com/free-vector/airplane-passengers-waiting-plane-waiting-room-airport-interior-with-plane-background_142963-452.jpg" alt="" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Community;