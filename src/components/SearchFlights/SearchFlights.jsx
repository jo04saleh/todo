import { useState } from "react"

const SearchFlights = () => {
  const [tripType, setTripType] = useState('one-way')
  const [searchData, setSearchData] = useState({
    departure: '',
    arrival: '',
    date: ''
  })

  return (
    <div className="card bg-dark text-white">
      <div className="card-body p-4">
        <h5 className="card-title mb-4">SEARCH FLIGHTS</h5>
        
        <div className="mb-4">
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="radio" 
              name="tripType" 
              id="return"
              checked={tripType === 'return'}
              onChange={() => setTripType('return')}
            />
            <label className="form-check-label" htmlFor="return">Return</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="radio" 
              name="tripType" 
              id="oneWay"
              checked={tripType === 'one-way'}
              onChange={() => setTripType('one-way')}
            />
            <label className="form-check-label" htmlFor="oneWay">One-way</label>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md">
            <input 
              type="text" 
              className="form-control bg-dark text-white" 
              placeholder="From where?"
              value={searchData.departure}
              onChange={(e) => setSearchData({...searchData, departure: e.target.value})}
            />
          </div>
          <div className="col-md">
            <input 
              type="text" 
              className="form-control bg-dark text-white" 
              placeholder="Where to?"
              value={searchData.arrival}
              onChange={(e) => setSearchData({...searchData, arrival: e.target.value})}
            />
          </div>
          <div className="col-md">
            <input 
              type="date" 
              className="form-control bg-dark text-white"
              value={searchData.date}
              onChange={(e) => setSearchData({...searchData, date: e.target.value})}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-warning text-white px-4">SEARCH FLIGHTS</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFlights