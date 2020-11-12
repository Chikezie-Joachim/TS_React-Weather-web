import React, { Component } from 'react'

export default class Test extends Component {


//     public key:any = '7a9edc097dce010437db461921d8df5d'
//   public defaultCity:string = "New York";
//   public uri:string = `http://api.openweathermap.org/data/2.5/weather?q=${this.defaultCity}&appid=${this.key}`;
    public uri:string = "http://localhost:3080/weather"
    public city:string = "london"
    public async ftc(url:string){
        await fetch(url, {method : "POST",
                          headers:{
                            // "Access-Control-Allow-Origin": "*",
                              "content-Type": "application/json",
                              "Accept": "application/json"
                          },
                          body: JSON.stringify({city: this.city })
        })
        // await fetch(url)
          .then((res) => res.json()
          )
          .then((data) => console.log(data)
          )
          .catch(err=>{  throw err
          });
      }

      public async componentDidMount() {  
        await this.ftc(this.uri)
      }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
