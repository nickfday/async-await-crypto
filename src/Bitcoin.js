import React, { Component } from 'react';

 export class Bitcoin extends Component {
   constructor() {
     super();
     this.state = {
       price: null
     }
   }

   componentWillMount() {
     this.go();
   }

   go() {
    console.log('go');
    const request = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      this.setState({
        price: json.bpi.USD.rate
      })
    }
    
    request('https://api.coindesk.com/v1/bpi/currentprice.json');
   
   }    

  
  render() {
    return (
      <div>
        Current Bitcoin Price: ${this.state.price}
      </div>
    )
  }
}

export default Bitcoin;