import {LitElement, html, css, } from 'lit';



class PsuCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
  }
  
  .card-container {
    background-color: #001e44;
    width: 20%;
    height: 50%;
    display: block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  
  
  .card-content {
    text-align: center;
    color: white;
    display: block;
    flex-direction: column;
    justify-content: center;
  }

  
  
  .card-content> img{
    width: 200px;
    max-width:80%;
    border-radius: 10px;
  }
  
  
  .card-content button{
    margin-top:40px;
    text-decoration: none;
    background-color: #ffff;
    color:#001e44 ;
    padding: 8px 12px;
    border-radius: 5px;
  }
  
  .card-content button:hover{ 
    background-color: #001e44;
    color: white;
  
  }
  
  .card-content button a{
     text-decoration: none;
  }
  
  #cDescription {
    color: white;
    font-family: "Lucida Console";
  }

  #toggleDescription {
    display: flex;
    background-color: white;
    color: black;
    width: 40%;
    align-items: center; 
    justify-content: center;
    margin-left: 100px;
    margin-top: 20px;
    font-family: "Lucida Console";
  }
  
  @media (max-width: 800px) and (min-width: 500px) {
    .details-button {
      display: block;
      
      .card-content button{
    display: none;
      }
    }
  }
  
  @media (max-width: 800px) {
    .card {
      max-width: 500px;
    }
      .card-content button{
    display: none;
      }
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
  <button id="btn">Clone Card</button>
  <button id="colorBtn">Change Card Color</button>
  <button id="titleBtn">Change Title</button>
  <button id="deleteBtn">Delete Last Card</button>
    <div class="cards">
    <div class="card-container">
      <div class="card-content">
        <h2 id="cardTitle">Penn State Blue and White Game</h2>
        <p>Blue and White game day</p>
        <img src="https://www.pennlive.com/resizer/nmIUnuL_9rmAqjXOlD5yFnxF29I=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/BHM62A6AUJFHVJIZHI6BDPJHWY.jpg" alt="Card Image">
        <div>

            <style>
        .hidden {
            display: none;
        }
        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .card-container {
            background-color: #001e44;
            width: 20%;
            margin: 8px;
            padding: 10px;
            border-radius: 12px;
        }
        .card-content img {
            max-width: 100%;
            border-radius: 10px;
        }

        
    </style>
 </head>
            
      
        </div>
      </div>
      <details>
        
      <summary id = "toggleDescription"  > Toggle Description </summary>
      <p id = "cDescription" >110 thousand fans come to watch penn state football to create the greatest show in college football.</p>

      </details>
     
    </div>
  </div>
    `;
  }
}
customElements.define('psu-card', PsuCard);



