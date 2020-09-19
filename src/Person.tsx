import React from "react";

export default class Person extends React.Component {
  state = {
    loading: true,
  };
  async componentDidMount() {
    const url = "./api.json";
    const response = await fetch(url)
      // const data = await response.json();
      // console.log(data.data);

      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div>logistics</div>;
  }
}
