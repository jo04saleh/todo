import { useState } from 'react'


const Hero = () => {
  return (
    <section className="bg-primary bg-gradient text-white py-5" style={{minHeight: "400px"}}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Let's explore & travel the world</h1>
          <p className="lead">Find the best destinations and the most popular stays!</p>
        </div>

        <div className="card bg-dark text-white mx-auto" style={{maxWidth: "800px"}}>
          <div className="card-body p-4">
            <h5 className="card-title mb-4">SEARCH FLIGHTS</h5>
            
            <div className="mb-4">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="tripType" id="return" />
                <label className="form-check-label" htmlFor="return">Return</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="tripType" id="oneWay" defaultChecked />
                <label className="form-check-label" htmlFor="oneWay">One-way</label>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md">
                <input type="text" className="form-control bg-dark text-white" placeholder="Singapore (SIN)" />
              </div>
              <div className="col-md">
                <input type="text" className="form-control bg-dark text-white" placeholder="Los Angeles (LA)" />
              </div>
              <div className="col-md">
                <input type="text" className="form-control bg-dark text-white" placeholder="mm/dd/yyyy" />
              </div>
              <div className="col-auto">
                <button className="btn btn-warning text-white px-4">SEARCH FLIGHTS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero