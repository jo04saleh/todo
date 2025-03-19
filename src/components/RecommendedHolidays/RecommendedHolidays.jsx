const RecommendedHolidays = () => {
  const holidays = [
    { 
      name: 'Bali', 
      price: '899', 
      duration: '4D3N', 
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800'
    },
    { 
      name: 'Swiss', 
      price: '900', 
      duration: '6D5N', 
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800'
    },
    { 
      name: 'Boracay', 
      price: '699', 
      duration: '5D4N', 
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800'
    },
    { 
      name: 'Palawan', 
      price: '789', 
      duration: '4D3N', 
      image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800'
    }
  ]

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Recommended Holidays</h2>
        <a href="#" className="text-primary text-decoration-none">View all holidays →</a>
      </div>
      <div className="row g-4">
        {holidays.map((holiday, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <img 
                src={holiday.image} 
                className="card-img-top"
                alt={holiday.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{holiday.name}</h5>
                <p className="card-text text-muted mb-2">{holiday.duration}</p>
                <p className="card-text text-primary fw-bold fs-5">${holiday.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecommendedHolidays