import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Profile } from "./components/Profile";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
