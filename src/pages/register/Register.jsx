import "./register.css"

export const Register = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                   <h3 className="loginLogo">sohso</h3>
                   <span className="loginDesc">
                       Connect with friends and the world around you on sohso.
                   </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="User Name" className="LoginInput" />
                        <input placeholder="Email" className="LoginInput" />
                        <input placeholder="Password" className="LoginInput" />
                        <input placeholder="Password Again" className="LoginInput" />
                        <button className="loginButton">Sign Up</button>
             
                        <button loginRegisterButton>Log into Account</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
