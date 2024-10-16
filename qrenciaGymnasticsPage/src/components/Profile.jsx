import React, { useState } from "react";
import { Col, Row, Modal, Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import profileimg from "../images/profileImage.png";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpeg";
import image13 from "../images/image13.jpeg";
import image14 from "../images/image14.jpeg";
import image15 from "../images/image15.jpeg";
import image16 from "../images/image16.jpeg";
import image17 from "../images/image17.jpeg";
import image18 from "../images/image18.jpeg";
import image19 from "../images/image19.jpeg";
import image20 from "../images/image20.jpeg";
import image21 from "../images/image21.jpeg";
import image22 from "../images/image22.jpeg";
import image23 from "../images/image23.jpeg";
import image24 from "../images/image24.jpeg";
import image25 from "../images/image25.jpeg";
import image26 from "../images/image26.jpeg";
import videoThumbnail from "../images/videoThumbnail.jpg";
import poster from "../images/promotionalImage.jpg";
import { RiStarSFill } from "react-icons/ri";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { PiMedalFill } from "react-icons/pi";
import data from "../agencyDetailsData.json";
import expert from "../associatedExpertsData.json";
import "../styles/profile.css";

export const Profile = () => {
  const images = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
  ];

  const displayedImages = images.slice(0, 3);
  const remainingImagesCount = images.length - displayedImages.length;

  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const {
    agencyName,
    agencyDescription,
    agencyState,
    agencyEmail,
    agencyCountryName,
    agencyCity,
    agencyContactNumber,
    agencyAddress,
    agencyCountryMobileNumberCode,
    agencyCentresDetails,
    selectedSkills,
    agencyFacebookLink,
    agencyInstagramLink,
    agencyWebsiteLink,
  } = data;

  const { expertDetails } = expert;

  const [visibleItems, setVisibleItems] = useState(3);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <div id="profile">
      <Container>
        <Row>
          <Col md={8}>
            <div className="profileHeading">
              <img src={profileimg} alt="" />
              <div>
                <h1>{agencyName}</h1>
                <Button className="follow-btn">
                  <FaPlus />
                  Follow
                </Button>
              </div>
            </div>

            <div className="blueDetails">
              <Row>
                <Col>
                  <div className="stars">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </Col>
                <Col>
                  <div className="experience">
                    <p>
                      <MdAccessTimeFilled />
                      20 Years Of Experience
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="details">
              <h2>About Excellence Gymnastics Academy Pvt Ltd</h2>
              <div className="data-item">
                <p>{agencyDescription}</p>
                <div className="data-info">
                  <div className="country">
                    <FaRegBuilding /> {agencyCity}, {agencyState},{" "}
                    {agencyCountryName}
                  </div>
                  <div className="phone">
                    <MdOutlinePhoneAndroid /> {agencyCountryMobileNumberCode}-
                    {agencyContactNumber}
                  </div>
                  <div className="email">
                    <MdOutlineEmail /> {agencyEmail}
                  </div>
                  <div className="address">
                    <MdOutlineLocationOn /> {agencyAddress}
                  </div>
                </div>
              </div>
            </div>

            <div className="details">
              <h2>Our Centres</h2>
              <div className="details-item">
                {agencyCentresDetails.map((item) => (
                  <div key={item.id} className="centreDetails">
                    <h3>{item.centreName}</h3>
                    <div className="data-info">
                      <div className="country">
                        <FaRegBuilding /> {item.centreCity}, {item.centreState},{" "}
                        {item.centreCountryName}
                      </div>
                      <div className="phone">
                        <MdOutlinePhoneAndroid /> {item.countryMobileNumberCode}
                        -{item.centreSpocPhoneNumber}
                      </div>
                      <div className="email">
                        <MdOutlineEmail /> {item.centreSpocEmail}
                      </div>
                      <div className="address">
                        <MdOutlineLocationOn /> {item.centreAddress}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="details">
              <h2>Spotlight</h2>
              <div className="spotlight-images">
                <Row>
                  {displayedImages.map((image, idx) => (
                    <Col className="d-flex spotImage" key={idx}>
                      <img
                        src={image}
                        alt={`img${idx + 1}`}
                        className="img-fluid ImagesMain"
                      />
                    </Col>
                  ))}
                  <Col>
                    <div
                      className="d-flex justify-content-center align-items-center img-fluid ImagesMain"
                      style={{ position: "relative", cursor: "pointer" }}
                      onClick={handleShow}
                    >
                      <img src={images[3]} alt="more" className="img-fluid" />
                      <div
                        style={{
                          position: "absolute",
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "1.5em",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        +{remainingImagesCount}
                      </div>
                    </div>
                  </Col>
                </Row>

                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Image Gallery</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Carousel
                      activeIndex={index}
                      onSelect={handleSelect}
                      interval={null}
                    >
                      {images.map((image, idx) => (
                        <Carousel.Item key={idx}>
                          <img
                            className="d-block w-100"
                            src={image}
                            alt={`img${idx + 1}`}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>

            <div className="details">
              <h2>Associated Experts</h2>
              <div className="detailsInfo">
                <Row>
                  {expertDetails.slice(0, visibleItems).map((details) => (
                    <Col lg={4} md={6} sm={6}>
                      <div key={details.userId} className="expertList">
                        <div className="topExpert">
                          <span>
                            <PiMedalFill /> Top Expert
                          </span>
                        </div>
                        <div className="expertInformation">
                          <div className="expertImage">
                            <img src={details.userImageUrl} alt="" />
                          </div>

                          <div className="information">
                            <h3>{details.userName}</h3>
                            <p>
                              {details.userDesignation},{" "}
                              {details.userOrganization}
                            </p>
                            <Button className="follow-btn">
                              <FaPlus />
                              Follow
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                {visibleItems < expertDetails.length && (
                  <Button onClick={loadMore} className="load-more-btn">
                    Load More
                  </Button>
                )}
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="skillsAndLinks">
              <div className="blueDetails">
                <div className="details">
                  <h3>Skills</h3>
                  {selectedSkills.map((skills) => (
                    <div key={skills.skillIntegerId} className="centreDetails">
                      <p>{skills.skillName}</p>
                    </div>
                  ))}
                </div>
                <div className="details">
                  <h3>Social Links</h3>
                  <div className="centreDetails d-flex">
                    <a href={agencyFacebookLink} className="links">
                      <FaFacebookF />
                    </a>
                    <a href={agencyWebsiteLink} className="links">
                      <FaGlobeAmericas />
                    </a>
                    <a href={agencyInstagramLink} className="links">
                      <RiInstagramFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="videoMessage">
              <div className="centreDetails">
                <h3>Video Message</h3>
                <img className="w-100 video" src={videoThumbnail} alt="" />
              </div>
            </div>

            <div className="centreDetails">
              <img className="w-100" src={poster} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
