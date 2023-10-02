// import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im"; // Correct the import statement for ImSearch
import NetflixLogo from "../../images/Netflix.png"; // Correct the path to the image
import "./Header.scss";

const Header = () => {
  return (
    <nav className="Header">
      {/* Move the text inside a <h1> tag for semantic purposes */}
   
      <img src={NetflixLogo} alt="Netflix Logo" /> {/* Use a more descriptive alt text */}
      <div>
        
        <a href="/tvshows">TV Shows</a>
        <a href="/movies">Movies</a>
        <a href="/recent">Recently Added</a>
        <a href="/mylist">My List</a>
       
        {/* Add more navigation links here if needed */}
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
