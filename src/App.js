
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';


function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root/>}>
  //       <Route index path="/home" element={<Page/>} />
  //       <Route path="/stopwatch" element={<Stopwatch/>} />
  //     </Route>
  //   )
  // )

  // const Root = () => {
  //   return <Navbar/>
  // }

  return (
    <div className="App d-flex flex-column min-vh-100">

   

      {/* {} */}
    <Navbar /> {/* Navbar on top */}
    <div className="flex-grow-1">
      {/* <RouterProvider router = {router}/> */}
     
    </div>
    <Footer /> {/* Sticky footer at the bottom */}
  </div>
  );
}

export default App;
