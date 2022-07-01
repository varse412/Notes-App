import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";


function App() {
  return (<div>
    <Header />
    {notes.map(not => (<Note key={not.key} head={not.title} para={not.content} />))}
    <Footer />
  </div>);
}

export default App;