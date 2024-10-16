import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import data from "../footerData.json";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "../styles/footer.css";

export const Footer = () => {
  const {
    address,
    externalLinks,
    contactDetails,
    copyRightText,
    termsAndConditionsText,
    privacyPolicyText,
    refundPolicyText,
  } = data;
  return (
    <>
      <div id="footerDesc">
        <Container>
          <Row>
            <Col md={4}>
              <div className="footerAddress">
                <a href="https://www.qrencia.com">
                  <img src={address.imagePath} alt="" />
                </a>
                <p>{address.title}</p>
                <p>{address.subTitle}</p>
              </div>
            </Col>
            {externalLinks.map((title) => (
              <Col md={2}>
                <div key={title.id} className="footerTitle footerContact">
                  <h3>{title.title}</h3>
                  <a href={title.videoPath}>{title.subTitle}</a>
                  <a href={title.link}>{title.description}</a>
                </div>
              </Col>
            ))}

            <Col md={2}>
              <div className="footerContact">
                <h3>{contactDetails.title}</h3>
                <a href="">{contactDetails.subTitle}</a>
                <a href="">{contactDetails.description}</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="footer">
        <Container>
          <Row>
            <Col md={4}>
              <div className="copyright">
                <p>© 2024 {copyRightText}</p>
              </div>
            </Col>
            <Col md={5}>
              <div className="termCondition">
                <a href="https://www.qrencia.com/terms-and-conditions">
                  {termsAndConditionsText}
                </a>
                <span> | </span>
                <a href="https://www.qrencia.com/privacy-policy">
                  {privacyPolicyText}
                </a>
                <span> | </span>
                <a href="https://www.qrencia.com/refund-policy">
                  {refundPolicyText}
                </a>
              </div>
            </Col>
            <Col md={3}>
              <div className="footerLinks">
                <a
                  href="https://www.facebook.com/qrenciaskills"
                  className="links"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/qrenciaskills"
                  className="links"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2Fqrenciaskills"
                  className="links"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/qrenciaskills/"
                  className="links"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/@qrenciaskills"
                  className="links"
                >
                  <FaYoutube />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
