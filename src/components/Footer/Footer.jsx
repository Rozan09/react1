import React from 'react'

export default function Footer() {
  return (<>
    <div className="footer">
    <div className="container px py-5 text-center">
    <div className='row'>
      <div className="col-lg-4 text-white">
        <h3 className="pt-5 fw-semibold">LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="col-lg-4 text-white">
        <h3 className="pt-5">AROUND THE WEB</h3>
        <div className="icons">
          <i className="fa-brands border-1 mx-2 p-2 border rounded-5  fa-facebook"></i>
          <i className="fa-brands border-1 mx-2 p-2 border rounded-5  fa-twitter"></i>
          <i className="fa-brands border-1 mx-2 p-2 border rounded-5  fa-linkedin-in"></i>
          <i className="fa-solid  border-1 mx-2 p-2 border rounded-5 fa-globe"></i>
        </div>
      </div>
      <div className="col-lg-4 text-white">
        <h2 className="pt-5">ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    </div>
    </div>
    <div className="cpyrights text-center text-white m-0 py-4">
      <p className="mb-0">Copyright © Your Website 2021</p>
      </div>
  </>
  )
}
