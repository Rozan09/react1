import React from 'react'

export default function Contact() {
    return (<>
        <div className="contact pb-5">
            <h2 className="text-uppercase text-center fw-bold pt-5 fs-1">conatct section</h2>
            <div className="d-flex justify-content-center mb-3 mt-3">
                <div className="line me-3"></div>
                <i className="star fa-solid fa-star"></i>
                <div className="line ms-3"></div>
            </div>
            <div className="text-center position-relative d-flex flex-column align-items-center mb-3">
                <input type="text" placeholder='userName' className="rounded-2 mb-5 mt-5 p-2 w-50 border-0 border-bottom" />
                <input type="text" placeholder='userAge' className="rounded-2 mb-5 p-2 w-50 border-0 border-bottom" />
                <input type="email" placeholder='userEmail' className="rounded-2 mb-5 p-2 w-50 border-0 border-bottom" />
                <input type="password" placeholder='userPassword' className="rounded-2 mb-5 p-2 w-50 border-0 border-bottom" />
                <button className="rounded-2 py-2 px-3 border-0 position-absolute text-white">send Message</button>
            </div>
            
        </div>
    </>
    )
}
