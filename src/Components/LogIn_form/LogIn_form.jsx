import './LogIn_form.css'


function LogIn_form({handleLogIn,inputEmailRef,inputPasswordRef}) {
    


    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={inputEmailRef} placeholder="Enter your email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={inputPasswordRef} placeholder="Enter your password" required />
                </div>
                <button type="submit" onClick={handleLogIn}> Sign In</button>
                <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
            </form>
        </div>
    )
}
export default LogIn_form;