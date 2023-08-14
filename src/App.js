
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Page from './components/page.js';
function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
    <Navbar /> {/* Navbar on top */}
    <div className="flex-grow-1">
      {/* Your main content */}
      <Page/>
    </div>
    <Footer /> {/* Sticky footer at the bottom */}
  </div>
  );
}

export default App;
