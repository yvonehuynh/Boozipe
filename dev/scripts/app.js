import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Qs from 'qs';
import Boozeinputs from "./boozeinputs";
import Boozecontainer from "./boozecontainer";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      booze: [],
      recipes: []
    }
    this.searchBooze = this.searchBooze.bind(this);
    this.searchFood = this.searchFood.bind(this);
  }
  searchBooze(e) {
    e.preventDefault();
    const booze = document.getElementById("booze-input").value;
    axios({
      method: 'GET',
      url: 'https://proxy.hackeryou.com',
      dataResponse: 'json',
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
      },
      params: {
        reqUrl: `http://lcboapi.com/products?access_key=MDoxNmMwYzI1YS1mNjRmLTExZTctYmE5Ni1mZjJjMWViODQ2Njg6QWtxc1ltNGVZUE9zTVhIZjg3ckR0ZFNJYUJVUndiWW4xR1BD&q=${booze}`,
        proxyHeaders: {
          'header_params': 'value'
        },
        xmlToJSON: false
      }
    }).then(res => {
      const result = res.data.result;
        this.setState({
          booze: result
        })
      })
    };
searchFood(e){
  const search = e.currentTarget.textContent;
  console.log(search)
  axios({
    method: 'GET',
    url: 'https://proxy.hackeryou.com',
    dataResponse: 'json',
    paramsSerializer: function (params) {
      return Qs.stringify(params, { arrayFormat: 'brackets' })
    },
    params: {
      reqUrl: `http://api.yummly.com/v1/api/recipes?_app_id=89ffe2b6&_app_key=30c0ddd0d202674645f74d80c5d0d94e&`,
      params: {
        q: `${search}`
      },
      proxyHeaders: {
        'header_params': 'value'
      },
      xmlToJSON: false
    }
  }).then(res => {
    const result = res.data.matches
    this.setState({
      recipes: result
    })
    console.log(this.state.recipes)
  })
}
  render() {
    return (
      <div>
        <Boozeinputs search={this.searchBooze} />
        {this.state.booze.map(res =>
          {
          return <Boozecontainer search={this.searchBooze} item={res} booze={this.state.booze} key={res.id} food={this.searchFood}/>   
          }
        )}
   </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));