import React from 'react';
import './loader.css';

 function Script() {

window.onload = function () {
  var loader = document.querySelector('.loader');
  loader.style.display = 'none';
};

setTimeout(function () {
  var loader = document.querySelector('.loader');
  loader.style.display = 'none';
}, 6000);

return (
  <div className="loader">
      <p className='preloar_title'>Loading</p>
          <div className="container">
               <div className="item-1"></div>
               <div className="item-2"></div>
               <div className="item-3"></div>
               <div className="item-4"></div>
               <div className="item-5"></div>
               <div className="item-6"></div>
    </div></div>
)


}
export default Script 






