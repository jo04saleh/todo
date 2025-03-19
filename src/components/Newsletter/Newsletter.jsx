const Newsletter = () => {
  return (
    <section className="bg-primary py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="text-white mb-4">Subscribe Newsletter</h2>
            <p className="text-white-50 mb-4">Get notified about the latest travel deals and updates!</p>
            
            <form className="d-flex gap-2 justify-content-center">
              <div className="flex-grow-1" style={{maxWidth: '400px'}}>
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Your email address"
                />
              </div>
              <button type="submit" className="btn btn-warning btn-lg text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter