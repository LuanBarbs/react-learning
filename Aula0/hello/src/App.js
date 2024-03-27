import React, { Component } from 'react';
import Result from './Result';

class App extends Component {
    static defaultProps = {
        secret: Math.floor(Math.random()*50)+1
    };

    constructor(props) {
        super(props)
        this.state = { term: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div>
                <div>
                    <label htmlFor='term'>
                        Escolha um Número de 1 a 50
                    </label>
                </div>
                <input
                    id='term'
                    type='number'
                    name='term'
                    value={this.state.term}
                    onChange={this.handleChange}
                />
                <Result term={this.state.term}
                    secretNum={this.props.secret} />
            </div>
        )
    }
}
export default App;