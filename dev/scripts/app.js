import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Qs from 'qs';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Boozeinputs from "./boozeinputs";
import Boozecontainer from "./boozecontainer";
import Recipecontainer from "./recipecontainer";
import Header from "./header";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      booze: [],
      recipes: [],
      recipeName: [],
      recipeIngredients: [],
      loading: false
    }
    this.searchBooze = this.searchBooze.bind(this);
    this.searchFood = this.searchFood.bind(this);
  }
  searchBooze(e) {
    e.preventDefault();
    this.setState({
      loading: true
    })
    const booze = document.getElementById("booze-input").value.replace(/\s+/g, "+");
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
      const booze = res.data.result;
        this.setState({
          booze,
          laoding: false
        })
      })
    };
searchFood(e){
  this.setState({
    loading: true
  })
  const search = e.currentTarget.textContent;
  axios({
    method: 'GET',
    url: 'https://proxy.hackeryou.com',
    dataResponse: 'json',
    paramsSerializer: function (params) {
      return Qs.stringify(params, { arrayFormat: 'brackets' })
    },
    params: {
      reqUrl: `http://api.yummly.com/v1/api/recipes?_app_id=89ffe2b6&_app_key=30c0ddd0d202674645f74d80c5d0d94e&q=${search}&requirePictures=true`,
      proxyHeaders: {
        'header_params': 'value'
      },
      xmlToJSON: false
    }
  }).then(res => {
    const recipes = res.data.matches
    this.setState({
      recipes,
      loading: false
    })
  })
}
  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.state.booze.length ? null :
          <Boozeinputs search={this.searchBooze} load={this.state.loading}/>
        }

        {this.state.recipes.length
        ? null
        :
          <div className="booze-parent-container">
              {this.state.booze.map(res =>
                {
                return <Boozecontainer search={this.searchBooze} item={res} booze={this.state.booze} key={res.id} food={this.searchFood}/>   
                }
              )}
              </div>
        }

        <div className="recipe-parent-container">
          {this.state.recipes.map(res =>{
            return <Recipecontainer recipe={res} key={res.id} food={this.searchFood} save={this.saveData} recipeName={this.state.recipeName} load={this.state.loading}/>
          })}
        </div>

        {this.state.booze.length || this.state.recipes.length ? 
        <button onClick={()=>this.setState({booze: [], recipes: []})}>Reset</button> : null}
   </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));