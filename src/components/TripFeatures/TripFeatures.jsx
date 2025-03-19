

const TripFeatures = () => {
  const features = [
    { icon: '🏨', title: 'Hotel', bgColor: '#FF8682' },
    { icon: '🎟️', title: 'Attractions', bgColor: '#FFA37C' },
    { icon: '🍽️', title: 'Eats', bgColor: '#7CF1D9' },
    { icon: '🚌', title: 'Commute', bgColor: '#FFD27C' },
    { icon: '🚕', title: 'Taxi', bgColor: '#7CC1FF' },
    { icon: '🎬', title: 'Movies', bgColor: '#7CFF8E' }
  ]

  return (
    <section className="container py-5">
      <h2 className="mb-4">PREPARE FOR YOUR TRIP</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
        {features.map((feature, index) => (
          <div key={index} className="col">
            <div 
              className="d-flex flex-column align-items-center justify-content-center p-4 rounded-3 text-white h-100"
              style={{ 
                backgroundColor: feature.bgColor,
                transition: 'transform 0.2s',
                cursor: 'pointer',
                aspectRatio: '1'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span className="fs-2 mb-2">{feature.icon}</span>
              <span>{feature.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TripFeatures