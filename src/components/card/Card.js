import React, { Header } from 'react';
import './card.css';
import prodImg from './images/product_1.jpg';

const data = [
    { id:1, price: 100, productName: 'Test', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ', prodImage: './images/product_1.jpg'   },
    { id:2, price: 1011,  productName: 'Test2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,', prodImage: './assets/images/product_2.jpeg'  },
    { id:3, price: 1003,  productName: 'Test3', description: 'Test description', prodImage: './assets/images/product_3.jpeg'  },
    { id:4, price: 1004,  productName: 'Test4', description: 'Test description', prodImage: './assets/images/product_4.jpeg'  },
    { id:5, price: 1005,  productName: 'Test5', description: 'Test description', prodImage: './assets/images/product_5.jpeg'  },
    { id:6, price: 1006,  productName: 'Test6', description: 'Test description', prodImage: './assets/images/product_6.jpeg'  },
    { id:7, price: 1007,  productName: 'Test7', description: 'Test description', prodImage: './assets/images/product_1.jpeg'  },
    { id:8, price: 1002,  productName: 'Test8', description: 'Test description', prodImage: './assets/images/product_1.jpeg'  },
    { id:9, price: 1003,  productName: 'Test9', description: 'Test description', prodImage: '../assets/images/product_1.jpeg'  },
  ];

class Card extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          cartContent: [],
          cartCnt: 0,
          show: false
      };
    }

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));

  addToCart(data) {
      console.log(data.id);
      let newTab = this.state.cartContent;
        newTab.push({
          key: data.id,
          productName: data.productName,
          price: data.price
        });
        this.setState({
          cartContent: newTab,
          cartCnt: this.state.cartCnt+1
        });
    }
  render(){
    return(
      <div className="product-listing">
      <div className="prod-title"><h1>Product Listing</h1></div>
      <div className="cart">
        <div className="cardIcn">   
          <button type="button" id="cart" onClick={this.toggle}>Cart({this.state.cartCnt})</button>
        </div>
        <div className={`cart-cnts ${this.state.show ? "active" : ""}`}>
          <ul className="cart-items">
            {this.state.cartContent.map(prodItm =>
              <li className="cart-item">
                <img className="product-image" src={prodImg} />
                <div className="product-info">
                  <p className="product-name">{prodItm.productName}</p>
                  <p className="product-price">Rs. {prodItm.price}</p>
                </div>
                <div className="product-total">
                  <p className="quantity">Quandity: 1</p>
                  <p className="amount">Rs. {prodItm.price}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {data.map(data => 
        <div className="card">
          <img src={prodImg} />
          <div className="card-body">
            <h2>{data.productName}</h2>
            <p>{data.description}</p>
            <div className="price-car">
              <p className="price">Rs. {data.price}</p>
              <button type="button" id="addCart" onClick={this.addToCart.bind(this, data)}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
      </div>
      );
  }
}

export default Card;
