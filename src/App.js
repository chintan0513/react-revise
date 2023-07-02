import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";

function App() {
  return (
    <div className="App">
      <Nav />
      <p>This is the starting code for "Your first component" ungraded lab </p>
      <Heading title="This is H1 Heading" />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
    </div>
  );
}

export default App;