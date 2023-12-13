import "../style/contactUs.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function ContactUs() {
  const formContact = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2cugkzq",
        "template_emwbjas",
        formContact.current,
        "RZWMKgwWAakxNqYLd"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Pesan telah berhasil di kirim!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="row contact">
        <form
          ref={formContact}
          onSubmit={sendEmail}
          className="col-md-7 form-contact"
        >
          <p>
            Jangan ragu untuk menghubungi kami kapan saja. <br /> Kami akan
            segera menghubungi Anda !
          </p>
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input
              type="text"
              className="form-control"
              placeholder="Masukan nama Anda"
              name="user_name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Masukan email Anda"
              name="user_email"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Pesan</label>
            <textarea
              className="form-control"
              rows="2"
              placeholder="Masukan pesan Anda"
              name="message"
            ></textarea>
          </div>
          <div className=" text-center">
            <button
              type="submit"
              className="btn button-submit mx-auto rounded-4"
            >
              Kirim
            </button>
          </div>
        </form>

        <div className="col-md-5 rounded-4 info-container">
          <h2>Info</h2>
          <div className="mt-4">
            <div className="d-flex">
              <i className="bi bi-envelope-fill"></i>
              <p> help.CollKas @mail.com</p>
            </div>

            <div className="d-flex">
              <i className="bi bi-telephone-fill"></i>
              <p> +62 810 1234 5678</p>
            </div>

            <div className="d-flex">
              <i className="bi bi-clock"></i>
              <p> 08.00 - 17.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
