import React from 'react'
import img1 from '../../assets/port1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

export default function Portfolio() {
    return (<>
        <div className="portfolio">
            <h2 className="text-uppercase text-center fw-bold pt-5 fs-1">portfolio component</h2>
            <div className="d-flex justify-content-center mb-3 mt-3">
                <div className="line me-3"></div>
                <i className="star fa-solid fa-star"></i>
                <div className="line ms-3"></div>
            </div>
            <div className="container pb-3">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 p-3">
                        <button type="button" className="border-0 card position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <img src={img1} className="card-img" alt="..." />
                            <div className="layer d-flex align-items-center justify-content-center card-img">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-3">
                        <button type="button" className="border-0 card" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <img src={img2} className="card-img" alt="..." />
                            <div className="layer d-flex align-items-center justify-content-center card-img">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-3">
                        <button type="button" className="border-0 card" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <img src={img3} className="card-img" alt="..." />
                            <div className="layer d-flex align-items-center justify-content-center card-img">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-3">
                        <button type="button" className="border-0 card" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <img src={img1} className="card-img" alt="..." />
                            <div className="layer d-flex align-items-center justify-content-center card-img">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-3">
                        <button type="button" className="border-0 card" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <img src={img2} className="card-img" alt="..." />
                            <div className="layer d-flex align-items-center justify-content-center card-img">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 p-3">
                        <button type="button" className="border-0 card" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <img src={img3} className="card-img" alt="..." />
                            <div className="layer d-flex align-items-center justify-content-center card-img">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </button>
                    </div>

                </div>
            </div>

            <div className="modal fade bgcolor" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="justify-content-center modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
            <div className="modal fade bgcolor" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="justify-content-center modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className="modal fade bgcolor" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="justify-content-center modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
