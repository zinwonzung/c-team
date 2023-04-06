import React from 'react';
import './Card.css';

function Card(props) {
    function handleClick() {
        console.log('Button clicked');
      }
  return (
    <div className="card" style={{ backgroundColor: props.backgroundColor }}>
      <h2 className="cardTitle">{props.title}</h2>
      <div className="cardContent">
        {props.children}
      </div>
      <a href="https://github.com/zinwonzung" target="_blank" rel="noopener noreferrer" className="cardButton" onClick={handleClick}>
        github
      </a>

      <a href="https://www.instagram.com/zinwonzung/" target="_blank" rel="noopener noreferrer" className="cardButton2" onClick={handleClick}>
        instagram
      </a>

      <a href="https://velog.io/@zinwonzung" target="_blank" rel="noopener noreferrer" className="cardButton3" onClick={handleClick}>
        blog
      </a>
      
    </div>
    
    
  );
}

export default Card;