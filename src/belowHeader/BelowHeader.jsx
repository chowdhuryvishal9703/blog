import "./belowHeader.css"

export default function BelowHeader(){
    return(
        <div className="belowHeader">
            <div className="belowHeaderTitle">
                <span className="belowHeaderTitleSm">React and Node</span>
                <span className="belowHeaderTitleLg">Blog</span>
            </div>
            <img className="belowHeaderImg" 
                src="https://cdn.pixabay.com/photo/2021/06/08/11/27/mushrooms-6320451_960_720.jpg"
                alt=""
            />
        </div>
    )
}