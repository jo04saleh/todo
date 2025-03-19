import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SearchFlights from './components/SearchFlights/SearchFlights'
import RecentSearches from './components/RecentSearches/RecentSearches'
import TripFeatures from './components/TripFeatures/TripFeatures'
import PopularDestinations from './components/PopularDestinations/PopularDestinations'
import RecommendedHolidays from './components/RecommendedHolidays/RecommendedHolidays'
import PopularStays from './components/PopularStays/PopularStays'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <SearchFlights />
        <RecentSearches />
        <TripFeatures />
        <PopularDestinations />
        <RecommendedHolidays />
        <PopularStays />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
