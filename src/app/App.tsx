import * as React from "react";
import logo from "../logo.svg";
import "./App.scss";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api.json",
});

class App extends React.Component{
  state = {
    flask: [],
  };
  constructor(appProps){
    super(appProps);
  }

  render() {
    return (
      <div className="containex">
        <div className="ent_bxc">
          <div className="fogext">
            <div className="mmg">
              <img src="" alt="" />
            </div>
            <div className="fgn"> </div>
            <div className="ctynt" data-stc="{}"></div>
          </div>
        </div>
      </div>
    );
  }
}
// const App: React.FC = () => {

// };

export default App;
