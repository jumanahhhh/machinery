import React, { useEffect } from 'react';
import './Cards.css';

const Cards = () => {
    useEffect(()=>{
        let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
    })
  return (
    <div className='cards'>
      <div className="container">
        <div className="slide">
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (1).webp)' }}>
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (2).webp)' }}>
            <div className="content">
              <div className="name">Finland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (3).webp)' }}>
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (4).webp)' }}>
            <div className="content">
              <div className="name">Australia</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (5).webp)' }}>
            <div className="content">
              <div className="name">Netherland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (6).webp)' }}>
            <div className="content">
              <div className="name">Ireland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (7).webp)' }}>
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (8).webp)' }}>
            <div className="content">
              <div className="name">Finland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (9).webp)' }}>
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (10).webp)' }}>
            <div className="content">
              <div className="name">Australia</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (11).webp)' }}>
            <div className="content">
              <div className="name">Netherland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (12).webp)' }}>
            <div className="content">
              <div className="name">Ireland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(./assets/machines (13).webp)' }}>
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
          <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
