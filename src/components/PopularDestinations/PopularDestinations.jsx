const PopularDestinations = () => {
  const destinations = [
    { name: 'Paris', price: '699', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800' },
    { name: 'Greece', price: '1079', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800' },
    { name: 'Norway', price: '895', image: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800' },
    { name: 'Tuscany', price: '1245', image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=800' }
  ]

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Most Popular Destinations</h2>
        <a href="#" className="text-primary text-decoration-none">View all destinations →</a>
      </div>
      <div className="row g-4">
        {destinations.map((destination, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
              <img 
                src={destination.image} 
                className="card-img h-100" 
                alt={destination.name}
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <div className="card-img-overlay d-flex align-items-end" 
                   style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                <div className="text-white">
                  <h5 className="card-title mb-1">{destination.name}</h5>
                  <p className="card-text mb-0">FROM <span className="fs-5 fw-bold">${destination.price}</span></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularDestinations