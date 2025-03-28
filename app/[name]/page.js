"use client";
import { useEffect, useState } from "react";
import CruiseFooter from "@/components/CruiseFooter";
import CruiseHeader from "@/components/CruiseHeader";
import { Button, Card, Col, Row, Container, Placeholder } from "react-bootstrap";
import cruisedata from "../../lib/utils.json";
import { useParams } from "next/navigation";

// Bootstrap Skeleton Loader Component
const SkeletonCard = () => {
    return (
        <Card className="shadow-sm">
            <Placeholder as={Card.Img} variant="top" className="w-100" style={{ height: "180px", backgroundColor: "#ddd" }} />
            <Card.Body>
                <Placeholder as={Card.Title} animation="wave">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="wave">
                    <Placeholder xs={8} />
                    <Placeholder xs={7} />
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={12} />
            </Card.Body>
        </Card>
    );
};

const CruisePage = () => {
    const { name } = useParams();
    const [filteredData, setFilteredData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (name) {
            setTimeout(() => {
                const data = cruisedata.filter((ite) => ite.name === name);
                setFilteredData(data);
                setLoading(false);
            }, 2000); // Simulate API delay
        }
    }, [name]);

    return (
        <>
            <CruiseHeader />
            <section>
                <div className="hero-section">
                    {/* Background Image */}
                    <div className="hero-image">
                        <img src="/images/cruise-home-poster.png" alt="Cruise Ship" className="img-fluid" />
                    </div>

                </div>
            </section>
            <section>
                <div className="text-center m-5">

                    <h1>
                        All Seasons Travel LLC Exclusive {name} Cruise Deals
                    </h1>
                </div>
                <Container>
                    <Row>
                        {loading
                            ? // Show Skeleton Loader while loading
                            Array.from({ length: 6 }).map((_, index) => (
                                <Col md={4} key={index} className="mb-4">
                                    <SkeletonCard />
                                </Col>
                            ))
                            : // Show real data when loaded
                            filteredData.map((item) =>

                                item.data.map((ite, idx) => (
                                    <Col md={4} key={idx} className="mb-4">
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={ite.image || "https://via.placeholder.com/100x180"}
                                            />
                                            <Card.Body>
                                                <Card.Title>{ite.title}</Card.Title>
                                                <Card.Text>
                                                    <strong>Ship:</strong> {ite.ship}
                                                </Card.Text>
                                                <Card.Text>Departing from: {ite.departing_from}</Card.Text>
                                                <Card.Text>
                                                    <ul>
                                                        {ite.offers.map((offer, offerIndex) => (
                                                            <li key={offerIndex}>{offer}</li>
                                                        ))}
                                                    </ul>
                                                </Card.Text>
                                                <Button variant="primary">Explore More</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))



                            )}
                    </Row>
                </Container>
            </section>
            <section>
                {loading ? null :
                    filteredData.map((item, index) => {
                        return <div dangerouslySetInnerHTML={{ __html: item.html }} />

                    })
                }
            </section>
            <CruiseFooter />
        </>
    );
};

export default CruisePage;
