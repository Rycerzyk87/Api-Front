import React from 'react';



class Loggin extends React.Component {
    state = {
        login: "",
        password: "",
    }
    handleChangeLogin = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleChangeLoginPassword = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            login: "",
            password: ""

        })
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Podaj Login<input type="text" onChange={this.handleChangeLogin} /></label><br></br>
                <label htmlFor="">Podaj Hasło<input type="password" onChange={this.handleChangeLoginPassword} /></label><br></br>
                <button>Zaloguj</button>
            </form>
        );
    }
}

export default Loggin;