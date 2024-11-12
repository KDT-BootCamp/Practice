import React from 'react' ;


function Header () {

    return(
        <header>
            <a href="/" className="btn btn-primary">Home</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/board" className="btn btn-danger">Board</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/" className="btn btn-danger">Login</a>            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/" className="btn btn-danger">Customer</a>
        </header>
    )
}


export default Header ;