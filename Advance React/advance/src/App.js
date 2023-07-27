import '../src/styles/app.css'
import Context from './components/Context';
import Fetch from './components/Fetch';
// import { useState } from 'react'
import Form from './components/Form';

const data = [
  {
    id: 1,
    name: "Chintan Tripathi",
    occupation: "Software Engineer",
    age: 22,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdrZDxdWQ3t2KdkM4ZlWws3qCR-x5S_Ajbg&usqp=CAU"
  },
  {
    id: 2,
    name: "Kalpesh Tripathi",
    occupation: "Automobile Engineer",
    age: 55,
    image: "https://www.nicepng.com/png/full/109-1093540_animation-character-png-businessman-vector-characters-png.png"
  },
  {
    id: 3,
    name: "Anita Tripathi",
    occupation: "Chef",
    age: 46,
    image: "data:image/png;base64,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"
  }
]


const App = () => {

  return (

    <div>
      <p className="heading">Employee Details</p>
      <section style={{ display: 'flex', justifyContent: "space-around" }}>
        {
          data.map((entry, id) => {
            return (
              <div className="character" key={id} >
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                  <img src={entry.image} style={{ mixBlendMode: "multiply", filter: "contrast(1.8)" }} alt="character" height={250} width={250} />
                  <p>{entry.name}</p>
                  <p>{entry.occupation}</p>
                  <p>{entry.age}</p>
                </div>
              </div>
            )
          })
        }
      </section>
      {/* form component   */} <Form />
      {/* Context component   */} <Context />
      <Fetch />
    </div >

  );
}

export default App;