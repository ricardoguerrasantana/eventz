
import "./App.css"
import HomePage from "./pages/HomePage"
import CreateEventPage from "./pages/CreateEventPage"
import EventPage from "./pages/EventPage" 
import NotFoundPage from "./pages/NotFoundPage"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/create" element={<CreateEventPage />} />
        <Route exact path="/event" element={<EventPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
