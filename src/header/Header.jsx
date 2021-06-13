import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <i className="headerIcon fab fa-facebook-square"></i>
                <i className="headerIcon fab fa-twitter-square"></i>
                <i className="headerIcon fab fa-pinterest-square"></i>
                <i className="headerIcon fab fa-instagram-square"></i>
            </div>
            <div className="headerCentre">
                <ul className="headerList">
                    <li className="headerListItem">Home</li>
                    <li className="headerListItem">About</li>
                    <li className="headerListItem">Contact</li>
                    <li className="headerListItem">Write</li>
                    <li className="headerListItem">Logout</li>
                </ul>
            </div>
            <div className="headerRight">
                <img className="headerImage"
                    src="https://media-exp1.licdn.com/dms/image/C5103AQE0hcrRkkAwqA/profile-displayphoto-shrink_800_800/0/1550253143696?e=1629331200&v=beta&t=7vZVyc3RtwRHaV30S687q5UEFSyrEOrw_pmO4ZfYFe4"
                    alt=""
                />
                <i className="headerSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}