import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://lh3.googleusercontent.com/0YWE6NENH6f0MZe4HAeWeMA3pmRsPcUT6lHYr746prnvYS4dR55dvuh4HBxyT6GtRfY9r1rSK20lgFcwfhXhmx9S3GG2QLB499nu6I2Oixux2PSQnkosI33F1Hxgu10iaJja0RFHNE6Tx4Vs-OVx3NVizici8O4sLzuLRD1O4SgXtrtdjwwFNPeN8j17Kl_u_bQK4EZwcahHJ2_YwOO7Dlu3KL1XWXR9wapsRaI_aqQEkkKakpj2vh0R5xCGqJ3tvmhqjbJWCCPbBQldp4IQHRX1SJ2ZMp03h1iM2og4TGBJETu6_VjcQ5XuZODcoiqcFXtE-7_d4KTFKdv1L_3wiM985xakUiW3wEvgfr41wPzpRSyL1qflsjQF7F_-3DsdFxRBIn1A5Z9WjEx9kJix10o2dJWn5Tvy7fMnecBy-lzO7BoNIfjaAM3fIcWHv9foX4G969hQtQ-wGZLFPavyLWthrzTcEFTGvCgSOgVu1Qf8Y9QZIiCp3ubeXU1bJ7XG_lm-whU5SCxWzZS1j8uOxDK5Q3ub0vQkbqwLvq5oVm8M8gtXWFlDwgGkMhSlDgGrNYJ8jvexnANVDVphKwDkvQ9ENzR0oU8glYgoGOR-Bsn0W1s_JqQEnOkleILMRP7pyMh760LxiNjLbEZl4WFVCP81tMgvmZ8pS9B6xcrwaCh_FBEGec74AKrvkxZddWfjFUaR9sln6v5Q2vEIZ-1KUP0=w900-h600-no?authuser=0"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
