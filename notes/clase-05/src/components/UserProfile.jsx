import React, { Component } from 'react';

export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            title: 'Diplo FrontEnd @ UNTreF',
            count: 0
        };
        this.interval = null;
        console.log('constructor: inicializando estado');
    }

    componentDidMount() {
        console.log('componentDidMount: componente montado');

        setTimeout(() => {
            console.log('timeout: init');

            this.setState({ user: { name: 'Nombre', age: 20 } });
            console.log('Api: cargada');

            console.log('timeout: end');
        }, 2000);

        this.interval = setInterval(() => {
            this.setState((prevState) => {
                document.title = `${prevState.title} - ${prevState.count + 1}`;
                return { ...prevState, count: prevState.count + 1 };
            });
        }, 2000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: component actualizado');

        if (prevState.user !== this.state.user) {
            console.log('Profile changed');
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: componente desmontado');
        clearInterval(this.interval);
    }

    render() {
        const { user } = this.state;

        return (
            <div>
                {user ? (
                    <h1>
                        Perfil de usuario {user.name}, {user.age} años
                    </h1>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        );
    }
}
