import { Link } from "react-router"

 const Header = () => {
    return (
      
      <div className="header">
      <div className="logo">
        <h1>Gita</h1>
      </div>
<ul>
  
   <li><Link>Home</Link></li>
   <li><Link to="/about">About</Link></li>
   <li><Link to="/contact">Contact</Link></li>
   <li><Link to="/books">Books</Link></li>
</ul>
      </div>
    )
 }

 export default Header