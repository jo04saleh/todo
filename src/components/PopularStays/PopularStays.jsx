

const PopularStays = () => {
  const stays = [
    {
      name: 'Matterhorn Suites',
      location: 'Zermatt, Switzerland',
      price: '574/night',
      rating: 4.9,
      reviews: 60,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800'
    },
    {
      name: 'Discovery Shores',
      location: 'Boracay, Philippines',
      price: '360/night',
      rating: 4.8,
      reviews: 116,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800'
    },
    {
      name: 'Arctic Hut',
      location: 'Svalbard, Norway',
      price: '420/night',
      rating: 4.7,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1515496281361-241a540151a5?auto=format&fit=crop&w=800'
    },
    {
      name: 'Lake Louise Inn',
      location: 'Banff, Canada',
      price: '244/night',
      rating: 4.6,
      reviews: 63,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800'
    }
  ]

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Popular Stays</h2>
        <a href="#" className="text-primary text-decoration-none">View all stays →</a>
      </div>
      <div className="row g-4">
        {stays.map((stay, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <img 
                src={stay.image} 
                className="card-img-top"
                alt={stay.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title mb-1">{stay.name}</h5>
                <p className="card-text text-muted mb-2">{stay.location}</p>
                <div className="d-flex align-items-center mb-3">
                  <span className="text-warning me-1">★</span>
                  <span className="me-2">{stay.rating}</span>
                  <span className="text-muted">({stay.reviews} reviews)</span>
                </div>
                <p className="card-text">
                  <span className="text-primary fw-bold">${stay.price}</span>
                </p>
                <button className="btn btn-outline-primary w-100">MORE DETAILS</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularStays