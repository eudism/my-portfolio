import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
 // const [formData, setFormData] = useState({});
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
    title:"",
    phone:""
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };
  const sendEmail = (e) => {
    window.alert("Form submitted successfully!");
    e.preventDefault();
    const portofolio = {
      Name: form.current.from_name.value,
      Email: form.current.reply_to.value,
      MessageTitle: form.current.title.value,
      PhoneNumber: form.current.phone.value,
      Message: form.current.message.value
  };
 postEmail(portofolio);
 setFormData({
  from_name: "",
  reply_to: "",
  message: "",
  title:"",
  phone:""
});
 };
  const postEmail = (portofolio) => {
    axios.post(
        "https://5po3pstkji.execute-api.us-east-1.amazonaws.com/v1/message",
        portofolio
    );
  };
  console.log("Hafith")
  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
          <div>
            <p>
              <strong>Email:</strong> eudismuhangi@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> 224-833-5849
            </p>
            <div>
              <strong>Address:</strong>
              <p>
                1501 Winslowe Dr
                <br /> Palatine, Illinois 60074
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="GuestName"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              value={formData.reply_to}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="title"
              className="user"
              placeholder="Subject"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              className="user"
              placeholder="PhoneNumber"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <span className="not-done">
              {notDone && "Please, fill all the input fields"}
            </span>
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
            <span className="done">{done && "Thanks for Contacting me"}</span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
