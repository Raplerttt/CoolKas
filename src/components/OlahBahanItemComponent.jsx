import React from "react";
import { Link } from "react-router-dom";

function OlahBahanItem({ judul_modul, deskripsi, id }) {
  return (
    <div className="col-lg-4 col-md-6 mb-5">
      <div className="card-deck h-100">
        <div className="card h-100 card-modul">
          <img
            src="/assets/olah-limbah.png"
            className="card-img-top"
            alt="Fan Art"
          />
          <div className="card-body">
            <Link
              to={`${id}`}
              className="card-title stretched-link  text-decoration-none"
            >
              <h5 className="mb-3 judul-card">{judul_modul}</h5>
            </Link>
            <p className="card-text line-clamp-3 deskripsi-card-olahbahan">
              {deskripsi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OlahBahanItem;
