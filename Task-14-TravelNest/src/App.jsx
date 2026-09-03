import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DestinationsLayout from "./pages/destinations/DestinationsLayout";
import DestinationList from "./pages/destinations/DestinationList";
import DestinationDetails from "./pages/destinations/DestinationDetails";
import Bookings from "./pages/Bookings";
import Guides from "./pages/Guides";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="destinations" element={<DestinationsLayout />}>
          <Route index element={<DestinationList />} />
          <Route path=":destinationId" element={<DestinationDetails />} />
        </Route>

        <Route path="bookings" element={<Bookings />} />
        <Route path="guides" element={<Guides />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;