import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";

function App() {
  return (
    <div className="App">
      <Nav />
      <p>This is the starting code for "Your first component" ungraded lab </p>
      <Heading title="This is H1 Heading" />
      <Intro1 h2="I've become a React developer" p="I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!" />
      <Intro1 h2="Why I love front-end web development" p="In this blog post, I'll list 10 reasons why I love to work as a front-end developer." />
      <Intro1 h2="What's the best way to style your React apps?" p="There are so many options to choose from. Here's a high-level overview of the popular ones." />
      <Footer />
    </div>
  );
}

export default App;