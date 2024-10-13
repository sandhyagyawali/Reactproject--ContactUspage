import './Navbar.module.css';
function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-img">
          <img src="images/frame.png" alt="frame" />
        </div>
        <ul>
          <li href="#">HOME</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
