import logo from "../../assets/images/strona_w_budowie.png";
import "./Home.scss"

function Home() {
    return (
        <div className="home-container">
        <img src={logo} alt="dimensions" className="logo" />
      </div>
    );
  }
  
  export default Home;