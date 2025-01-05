import React from 'react'
import homeimg from '../../assets/avataaars.svg'
export default function Home() {
    return (<>
        <div className="home py-5">
        <div className="m-auto col-2">
        <img src={homeimg} className="my-4" alt="" />
        </div>
        <h2 className="text-uppercase text-center fs-1 fw-bold text-white ">start Framework</h2>
        <div className="d-flex justify-content-center mt-4 mb-3 text-white">
            <div className="line me-3"></div>
            <i className="star fa-solid fa-star"></i>
            <div className="line ms-3"></div>
        </div>
        <p className='d-flex text-white justify-content-center'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </>
    )
}
