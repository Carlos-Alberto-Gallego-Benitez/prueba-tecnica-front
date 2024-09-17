import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import './styles/App.css'
import Login from "./components/views/login/login";

function App() {

  return (
    <>
      <BrowserRouter basename="/prueba-tecnica-david">
      <Routes>
        <Route
          path={`/`} element={
            <Fragment>
              <Login />
            </Fragment>
          }
        />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
