import React from "react";
import "./App.scss";
import { WeatherDetail } from "./components/components";

let fg:any = {'data':''};
class App extends React.Component {
  state = {
    unknown: true,
    data: fg,
  };

  public key:any = '7a9edc097dce010437db461921d8df5d'
  public defaultCity:string = "New York";
  public uri:string = "http://localhost:3080/weather";
  public tt:string | undefined;

  public async ftc(url:string, city:string){
    await fetch(url, {method : "POST",
    headers:{
        "content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({city: city })
})
      .then((res) => res.json())
      .then((data) => this.setState({data: data, unkwown: false}))
      .catch(err=>{  this.setState({data: "unknown", unkwown: true})
      });
  }
  public async componentDidMount() {  
    await this.ftc(this.uri, this.defaultCity)
  }

  render() {
    return (<div className="app">
    <div className="container">
      <div className="top">
        <div className="lft"></div>
        <div className="cnter">
          <div id="frme">
          <div className="inputbx">
          <input type="text" placeholder="Find Place"  onChange={(event:any):string | any =>{this.tt = event.target.value;
          }} defaultValue="New York" className="w_input"/>
          </div>
          <div className="subm"><button type="submit" onClick={
            async ()=>{ let ff = !this.tt? this.defaultCity:this.tt;
              await this.ftc(`http://localhost:3080/weather`, ff);              
              
           }} className="dlf">GO</button></div>
          </div>
        </div>
        
      </div>
    <div className="cld_res_container">
    <WeatherDetail
    name = {`${this.state.data.name? this.state.data['name']: "unknown"}`}
    lon = {`${this.state.data.coord? "lon: "+ this.state.data.coord.lon : "unknown"}`}
    lat = {`${this.state.data.coord? "lat: "+ this.state.data.coord.lon : "unknown"}`}
    temp= {`${  this.state.data.main? this.state.data.main.temp: "unknown"   }`}
    desc= {`${  this.state.data.weather? this.state.data.weather[0].description: "unknown"   }`}
    />
    </div>
    </div>
  </div>);  
  }
}

export default App;
