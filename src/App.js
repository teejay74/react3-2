import './App.css'
import data from './etsy.json'
import Listing from './components/Listing.jsx'

function App() {
  return (
    <div className="App">
      <Listing data={data} />
    </div>
  )
}

export default App