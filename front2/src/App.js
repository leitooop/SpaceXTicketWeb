import logo from "./assets/spaceportada.jpg";
import "./App.css";
import NewCardForm from "./components/newCardForm";

import { Container, Col, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <NewCardForm />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
