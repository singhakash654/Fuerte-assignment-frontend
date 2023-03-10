import { Link } from "react-router-dom";
import PostView from "../post-view/post-view";
import "./header.css";
const Header = () =>{
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require("../../images/icon@2x.png")} alt= "logo"/><h2 className="textLogo">Welcome All to the PostWall</h2>
                </section>
                <section className="camera-icon">
                    <Link to="/NewPost">
                        <p>Click here</p>
                        <img src={require("../../images/camera.png")} alt= "camera" width="50px"/>
                    </Link>
                </section>
            </nav>
            <PostView/>
        </>
    )
}

export default Header;