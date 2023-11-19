

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Book from "./pages/Book";
import Add from "./pages/Add";
import Update from "./pages/Update";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/update" element={<Update />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
