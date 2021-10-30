import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './TravelersReview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
const TravelersReview = () => {
    return (
        <Container id="traveler" className="mt-5">
            <h2 className="text-center section-heading">OUR HAPPY <span className="text-warning">TRAVELLERS</span> </h2>
            <div className="mt-5">
                <Row >
                    <Col sm={12} md={6}>
                        <Row>
                            <Col className="p-1" sm={4}><Card className="bg-dark text-white border-0 rounded-0">
                                <Card.Img className="collage-img" style={{ filter: "brightness(0.5)" }} src="http://blog.exploreborobudur.com/wp-content/uploads/2020/04/asia-best-places-to-visit-kingdom-of-bhutan.jpg" alt="Card image" />
                                <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                    <div>
                                        <Card.Title> <h4>ASIA</h4> </Card.Title>

                                    </div>
                                </Card.ImgOverlay>
                            </Card></Col>
                            <Col className="p-1" sm={8}><Card className="bg-dark text-white border-0 rounded-0">
                                <Card.Img className="collage-img" style={{ filter: "brightness(0.5)" }} src="https://img.freepik.com/free-photo/eiffel-tower-champ-de-mars-paris-france_53876-94787.jpg?size=338&ext=jpg" alt="Card image" />
                                <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                    <div>
                                        <Card.Title> <h4>EUROPE</h4></Card.Title>

                                    </div>
                                </Card.ImgOverlay>
                            </Card></Col>

                        </Row>
                        <Row>
                            <Col className="p-1" sm><Card className="bg-dark text-white border-0 rounded-0">
                                <Card.Img className="collage-img" style={{ filter: "brightness(0.5)" }} src="https://img.freepik.com/free-photo/twelve-apostles-is-famous-place-great-ocean-road-victoria-australia_64600-57.jpg?size=338&ext=jpg" alt="Card image" />
                                <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                    <div>
                                        <Card.Title><h4>AUSTRALIA</h4></Card.Title>

                                    </div>
                                </Card.ImgOverlay>
                            </Card></Col>
                            <Col className="p-1" sm><Card className="bg-dark text-white border-0 rounded-0 ">
                                <Card.Img className="collage-img" style={{ filter: "brightness(0.5)" }} src="https://www.ytravelblog.com/wp-content/uploads/2011/11/3.jpg" alt="Card image" />
                                <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                    <div>
                                        <Card.Title><h4>ANTARCTICA</h4></Card.Title>

                                    </div>
                                </Card.ImgOverlay>
                            </Card></Col>
                            <Col className="p-1" sm><Card className="bg-dark text-white border-0 rounded-0">
                                <Card.Img className="collage-img" style={{ filter: "brightness(0.5)" }} src="https://img.freepik.com/free-photo/waterfall-near-icefields-parkway-alberta-canada_478841-196.jpg?size=338&ext=jpg&ga=GA1.2.771714822.1635430205" alt="Card image" />
                                <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                    <div>
                                        <Card.Title><h4>NORTH AMERICA</h4></Card.Title>

                                    </div>
                                </Card.ImgOverlay>
                            </Card></Col>
                        </Row>
                        <Row>
                            <Col className="p-1" sm={8}><Card className="bg-dark text-white border-0 rounded-0 ">
                                <Card.Img className="collage-img" style={{ filter: "brightness(0.5)" }} src="https://img.freepik.com/free-photo/giraffe-savanna_73683-736.jpg?size=338&ext=jpg&ga=GA1.2.771714822.1635430205" alt="Card image" />
                                <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                    <div>
                                        <Card.Title><h4>AFRICA</h4></Card.Title>

                                    </div>
                                </Card.ImgOverlay>
                            </Card></Col>
                            <Col className="p-1" sm={4}><Card className="bg-dark text-white border-0 rounded-0">
                                <Card.Img className="collage-img" style={{ filter: "brightness(0.5)" }} src="https://image.freepik.com/free-photo/wide-angle-shot-blyde-river-canyon-south-africa_181624-11213.jpg" alt="Card image" />
                                <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
                                    <div>
                                        <Card.Title><h4>SOUTH AMERICA</h4></Card.Title>

                                    </div>
                                </Card.ImgOverlay>
                            </Card></Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={6}>
                        <Carousel className="mt-1 card" >
                            <Carousel.Item className="w-100 text-center p-5 carousel-page carousel-one ">
                                <img className="rounded-circle" width="100px" height="100px" src="https://image.freepik.com/free-photo/smiling-optimistic-man-show-thumb-up-approve-recommend_176420-17852.jpg" alt="" />
                                <h1>Tom Hanks</h1>
                                <p>We had the most remarkable family tour with Peter Sommer Travels. Not only everything was perfect, but we felt, in every instance, that our guides and our gulet crew truly cared about us, both the kids and adults, and did their best to make this trip memorable</p>
                                <div>
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="w-100 text-center p-5 carousel-page carousel-two ">
                                <img className="rounded-circle" width="100px" height="100px" src="https://image.freepik.com/free-photo/happy-satisfied-female-customer-holding-cellphone_74855-2299.jpg" alt="" />
                                <h1>Kate Blancett</h1>
                                <p>The holiday of a life time - our gulet adventure in the Dodecanese Greek Islands was without a doubt our favourite family trip. The comfort and beauty of the gulet, the incredibly caring crew, the delicious food, the history we learned from our competent and friendly leader, along with the stunning beauty of the islands</p>
                                <div>
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="w-100  text-center p-5 carousel-page carousel-three">
                                <img className="rounded-circle" width="100px" height="100px" src="https://image.freepik.com/free-photo/happy-carefree-pleasant-cute-young-s-european-girlfriend-laughing-joyfully-smiling-having-fun-feelin_1258-52500.jpg" alt="" />
                                <h1>Ema Stone</h1>
                                <p>Our gulet cruise from Kos to Patmos was everything and more than expected. It lived up to the Peter Sommer Travels' emphasis on culture, history, archaeology, comfort and camaraderie. Exceptional guides attended to each guest's interests and needs and were exceptional hosts </p>
                                <div>
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} />
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default TravelersReview;