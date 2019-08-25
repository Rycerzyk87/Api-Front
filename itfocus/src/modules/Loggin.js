import React from 'react';
import Main from './Main';


class Loggin extends React.Component {
    state = {
        login: "",
        password: "",
        permission: false,
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
            permission: true,

        }) :
            this.setState({
                login: "",
                password: "",


            })
    }
    handleChangeLogg = (e) => {
        this.setState({
            logg: "",
            permission: false,
        })
    }
    render() {
        return (
            <>
                <div className="userName">
                    <p>Zalogowany użytkownik: <br></br><span className="user">{this.state.logg}</span></p>
                    <button onClick={this.handleChangeLogg}>Wyloguj</button>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Podaj Login<input value={this.state.login} type="text" onChange={this.handleChangeLogin} /></label><br></br>
                    <label htmlFor="">Podaj Hasło<input value={this.state.password} type="password" onChange={this.handleChangeLoginPassword} /></label><br></br>
                    <button className="submit">Zaloguj</button>
                </form>
                {this.state.logg != "" ? <Main /> : <p className="error" style={{ display: 'block' }}>Dalsza sekcja dostępna dla zalogowanych użytkowników</p>}
            </>
        );
    }
}

export default Loggin;