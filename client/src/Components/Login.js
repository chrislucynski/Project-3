import React from 'react';

const Login = () => {
    return (
        <div className="container shadow mt-5 p-5 w-50">
            <h1>
                Login option is not working at the moment.  
            </h1>
            <p>
                In the meantime, feel free to play around with the non-working form below.  If not, we totally understand.
            </p>
            <hr></hr>
            <h1>
                Sign in as an Administrator
            </h1>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login