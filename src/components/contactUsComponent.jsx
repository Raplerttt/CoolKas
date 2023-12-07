import "../style/contactUs.css";
function ContactUs() {
  return (
    <div>
      <div className="row contact">
        <div className="col-md-7 form-contact">
          <p>
            Jangan ragu untuk menghubungi kami kapan saja. <br /> Kami akan
            segera menghubungi Anda !
          </p>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Nama
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Masukan nama Anda"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Masukan email Anda"
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Pesan
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Masukan pesan Anda"
            ></textarea>
          </div>
          <div className=" text-center">
            <button className="btn button-submit mx-auto">Kirim</button>
          </div>
        </div>

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
