import React from 'react'

export default function About() {
    return ( <>
        <div className="about py-5">
        <div className="container mt-5 py-5">
            <h2 className="pt-5 text-uppercase text-center fs-1 fw-bold text-white">about component</h2>
            <div className="d-flex justify-content-center mb-3 mt-3 text-white">
                <div className="line me-3"></div>
                <i className="star fa-solid fa-star"></i>
                <div className="line ms-3"></div>
            </div>
            <div className="row g-5 px-5 mx-4 text-white pb-5 mb-5">
            <div className="col-6 px-2">
                <p>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
            </div>
            <div className="col-6 px-2">
                <p>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}
