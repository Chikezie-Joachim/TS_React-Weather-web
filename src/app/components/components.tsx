import React from "react";
import {weather} from "../types/types";
import "../App.scss";

export const WeatherDetail = ({name,lon,lat,temp,desc}:weather) => {
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