import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button } from "@material-ui/core";
import Picture from "./Components/Picture";

function App() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const getpictures = async () => {
      const data = await axios.get(
        "https://api.unsplash.com/photos/random?count=20&orientation=portrait&client_id=7IRujgWDEs46SAAc5kYIFgQ-qogzAg3RrDyMNXqP80k"
      );
      console.log(data.data);
      setPictures(data.data);
    };
    getpictures();
  }, []);

  return (
    <div className="App">
      <header>
        <h2>Photo Gallery</h2>
        <p>Watch some amazing photos clicked !!!</p>
      </header>
      <section>
        <main>
          <Grid container spacing={3}>
            {pictures.map((pic, index) => (
              <Picture pic={pic} />
            ))}
          </Grid>
        </main>
        <footer>
          <Button className="add_btn" variant="contained" color="secondary">
            Show More
          </Button>
        </footer>
      </section>
    </div>
  );
}

export default App;
