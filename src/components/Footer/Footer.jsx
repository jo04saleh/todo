

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <h3 className="h4 mb-3">FickleFlight</h3>
            <p className="text-white-50">
              FickleFlight is your one-stop travel portal. We offer hassle-free flight and hotel bookings. 
              We also have all your flight needs in you online shop.
            </p>
          </div>
          
          <div className="col-lg-8">
            <div className="row">
              <div className="col-sm-4">
                <h4 className="h5 mb-3">Company</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Mobile</a></li>
                </ul>
              </div>
              
              <div className="col-sm-4">
                <h4 className="h5 mb-3">Contact</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Help/FAQ</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Press</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Affiliates</a></li>
                </ul>
              </div>
              
              <div className="col-sm-4">
                <h4 className="h5 mb-3">More</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Airline Fees</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Tips</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-4 bg-secondary" />
        
        <div className="row align-items-center">
          <div className="col-md">
            <p className="text-white-50 mb-md-0">© 2024 FickleFlight. All rights reserved.</p>
          </div>
          <div className="col-md">
            <div className="d-flex gap-3 justify-content-md-end">
              <a href="#" className="text-white-50"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white-50"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white-50"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer