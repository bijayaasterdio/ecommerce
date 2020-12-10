import React from "react";
import ReactDOM from "react-dom";
import './css/bootstrap.min.css';
import './css/style.css';
import logo from './img/logo.png';
import baricon from './img/svg/menu.svg';
import shopicon from './img/svg/shopping-cart.svg'
import caticon1 from './img/svg/f-icon.svg'
import banner from './img/banner.svg'



function BookList() {
  return (
    <div>
        <Navi/>
        <SearchB />
        <section>
          <div className="container">
          <img src={banner} alt=""/>
          </div>
        </section>
        <section>
          <div className="container">
            {CatArr.map((category)=>{
              const {img, text} = category;
              return (
                <Category category={category}></Category>
              );
            })}
          </div>
        </section>

      </div>
  );
  
}

const Navi = () => {
  return(
    <section className="listing">
      <div className="container">
        <div className="row">
        <div className="logo col-md-3">
          <img src={baricon} alt=""/>
        </div>
         <div className="col-md-6">
           <img src={logo} alt=""/>
         </div>
         <div className="col-md-3">
           <img src={shopicon} alt=""/>
         </div>
        </div>
      </div>
    </section>
  )
}


const CatArr = [
  {
    img:{caticon1},
    text:'All Items',
  },
  {
    img:'img/logo.png',
    text:'Jeweleries',
  }
];
const Category = (props) => {
  const {img,text} = props.category;
  return(
    <div className="block">
      <div className="icon"><img src={img} alt=""/></div>
      <div className="text">{text}</div>
    </div>
  )
}

const SearchB = () => {
  return (
<div className="searchbox">
  <div className="container">
    <input type="text" className="form-control"/>
    </div>
    </div>
  )
}
ReactDOM.render(<BookList />, document.getElementById('root'));
