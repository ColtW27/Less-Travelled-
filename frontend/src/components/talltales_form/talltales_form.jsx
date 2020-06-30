import React from 'react';

class Talltalesform extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.talltales;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const tallTale = Object.assign({}, this.state);
        this.props.createTalltale(tallTale)
        .then(()=> this.props.history.push('/talltales'))
    }

    render() {
        
    }

}

export default Talltalesform;