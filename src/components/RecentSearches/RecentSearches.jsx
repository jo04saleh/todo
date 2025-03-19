

const RecentSearches = () => {
  const searches = [
    {
      from: 'SIN',
      to: 'LAX',
      departDate: '7 Sep 2021'
    },
    {
      from: 'MY',
      to: 'DUB',
      departDate: '9 Sep 2021'
    }
  ]

  return (
    <section className="container py-5">
      <h2 className="mb-4">RECENT SEARCHES</h2>
      <div className="row g-4">
        {searches.map((search, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="h5 mb-0">{search.from}</span>
                  <div className="d-flex align-items-center px-3">
                    <div className="bg-primary rounded-circle" style={{width: "8px", height: "8px"}}></div>
                    <div className="border-top border-2 border-primary mx-2" style={{width: "60px"}}></div>
                    <span className="text-primary">✈</span>
                    <div className="border-top border-2 border-primary mx-2" style={{width: "60px"}}></div>
                    <div className="bg-primary rounded-circle" style={{width: "8px", height: "8px"}}></div>
                  </div>
                  <span className="h5 mb-0">{search.to}</span>
                </div>
                <p className="text-muted mb-0">Depart On: {search.departDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentSearches