import React from 'react';
import Main from './Main';


class Loggin extends React.Component {
    state = {
        login: "",
        password: "",
        logg: "",

    }
    handleChangeLogin = (e) => {
        this.setState({
            login: e.target.value
        })
    }
    handleChangeLoginPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.state.password === "admin" ? this.setState({
            logg: this.state.login,
            login: "",
            password: "",
        }) :
            this.setState({
                login: "",
                password: "",
            })
    }
    handleChangeLogg = (e) => {
        this.setState({
            logg: "",
        })
    }
    render() {
        return (
            <>
                <div className="userName">
                    <p>User: <br></br><span className="user">{this.state.logg}</span></p>
                    <button onClick={this.handleChangeLogg}>Logout</button>
                </div>
                <form onSubmit={this.handleSubmit} autoComplete="on">
                    <label htmlFor="">Login<input value={this.state.login} type="text" onChange={this.handleChangeLogin} /></label><br></br>
                    <label htmlFor="">Password<input value={this.state.password} type="password" onChange={this.handleChangeLoginPassword} autoComplete="off" /></label><br></br>
                    <button className="submit">Login</button>
                </form>
                {this.state.logg !== "" ? <Main /> : <p className="error" >Section avalible for register users<p className="protip">(the best password is admin ;-) )</p></p>}
            </>
        );
    }
}

export default Loggin;