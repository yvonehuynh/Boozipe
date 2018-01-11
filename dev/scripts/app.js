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
      booze: []
    }
    this.searchBooze = this.searchBooze.bind(this)
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
        reqUrl: 'http://lcboapi.com/products?access_key=MDoxNmMwYzI1YS1mNjRmLTExZTctYmE5Ni1mZjJjMWViODQ2Njg6QWtxc1ltNGVZUE9zTVhIZjg3ckR0ZFNJYUJVUndiWW4xR1BD',
        params: {
          q: `${booze}`
        },
        proxyHeaders: {
          'header_params': 'value'
        },
        xmlToJSON: false
      }
    }).then(res => {
      const result = res.data.result;
      console.log(result)
      // result.map(res=>
      // {
      //   console.log(res)
      //   const resultArray = [];
      //   resultArray.push(res);
        this.setState({
          booze: result
        })
      })
    };

  
  render() {
    return (
      <div>
        <Boozeinputs search={this.searchBooze} />
        {this.state.booze.map(res =>
          {
          return <Boozecontainer search={this.searchBooze} item={res} booze={this.state.booze} key={res.id}/>   
          }
        )}
   </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));