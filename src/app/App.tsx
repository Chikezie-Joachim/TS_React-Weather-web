import React, { FC,  } from "react";
import "./App.scss";
import {weather} from "./types/types"
let fg:any = {'data':[{"name": "unknown!!!"}
                     ]
              };



class App extends React.Component {
  state = {
    unknown: true,
    data: fg,
  };

  private key:string = "7a9edc097dce010437db461921d8df5d";
  public defaultCity:string = "New York";
  public uri:string = `http://api.openweathermap.org/data/2.5/weather?q=${this.defaultCity}&appid=${this.key}`;
  public tt:any;
  public tp:any;

  //components
  private WeatherDetail = ({name,lon,lat,temp,desc}:weather) => {
    return (
        <div className="App-header">
          <div className="wrapset">
            <div className="fl_ name_">
              <h3 className="n_name">City Name <span>🌆</span></h3>
              <h3 className="nm_name">{name}</h3>
            </div>
            <div className="fl_ location_">
              <h3 className="n_name">
                Location <span> 🚩 </span>
              </h3>
              <div className="fl_lgt">
                <div className="s_lgt"><span className="lon">
                                        {/* <span className="tit">lon</span> */}
                                         <span className="dfl">{lon}</span>
                                          </span>
                </div>
                <div className="s_lgt">
                                          
                                      <span className="lat">
                                      {/* <span className="tit">lat</span> */}
                                       <span className="dfl">{lat}</span>
                                      </span>
                                            </div>
              </div>
            </div>
            <div className="fl_ temp_"><h3 className="n_name">
                Temperature <span>🌈</span>
              </h3><span className="degc">{temp}<sup className="ddg"><span className="dot"></span></sup></span></div>
            <div className="fl_ Description"><h3 className="n_name">
                Weather Description <span> ⛅  </span>
              </h3>
          <span className="decriptioner">{desc}</span>
              </div>
          </div>
        </div>
    );
  };

  async ftc(url:string){
    await fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({data: data, unkwown: false}))
      .catch(err=>{  this.setState({data: "unknown", unkwown: true})
      });
  }
  async componentDidMount() {  
    await this.ftc(this.uri)
  }
  hel(a:any){   
    console.log(a.name);    
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
              console.log(ff);
              await this.ftc(`http://api.openweathermap.org/data/2.5/weather?q=${ff}&appid=${this.key}`);              
              
           }} className="dlf">GO</button></div>
          </div>
        </div>
        
      </div>
    <div className="cld_res_container">
    <this.WeatherDetail
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
