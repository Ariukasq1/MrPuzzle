import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i></i>Mr Puzzle Shop
              </h6>
              <div>
                <a
                  href="https://www.facebook.com/RubikShooniiDelgvvr"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/mrpuzzleshop_/"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCzETm80cIBSh9JHBIBeznJA"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Хэрэглэгчийн булан
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Хүргэлтийн нөхцөл
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Хэрхэн захиалга хийх
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Холбоо барих</h6>
              <p>
                <i className="fas fa-phone me-3"></i> + 9999999
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 8888888
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                mrPuzzle@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2022 он Бүх эрх хуулиар хамгаалагдсан.
      </div>
    </MDBFooter>
  );
}
