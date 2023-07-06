import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";
import Toggler from "./components/Toggler";
import Promo from "./components/Promocodes/Promo";
import Fruits from "./components/Fruits";
import { useState } from "react";
import FruitsCounter from "./components/FruitsCounter";

function App() {

  const [colors] = useState([
    { name: "red", id: 1 },
    { name: "yellow", id: 2 },
    { name: "orange", id: 3 },
    { name: "purple", id: 4 }
  ])

  return (
    <div className="App">
      <Toggler />
      <Promo />
      <Nav />
      <p>This is the starting code for "Your first component" ungraded lab </p>
      <Heading title="This is H1 Heading" />
      <Intro1 h2="I've become a React developer" p="I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!" />
      <Intro1 h2="Why I love front-end web development" p="In this blog post, I'll list 10 reasons why I love to work as a front-end developer." />
      <Intro1 h2="What's the best way to style your React apps?" p="There are so many options to choose from. Here's a high-level overview of the popular ones." />
      <Footer />

      <h1>Where should state go?</h1>
      <Fruits fruits={colors} />
      <FruitsCounter colors={colors} />
    </div>
  );
}

export default App;