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
    handleChange(field) {
       return e => this.setState({
            [field]: e.target.value
        });
    }

    render() {
      const { title, body} = this.state;
      return(
          <div className="talltales-form-container">
              <h3>Talltales form</h3>
              <form 
              onSubmit={this.handleSubmit}
              className="talltales-form"
              >
                <label htmlFor="title">
                  <input 
                  type="text"
                  value={title}
                  onChange={this.handleChange('title')}
                  placeholder="Title"
                  />
                </label>
                <label htmlFor="body">
                  <textarea 
                  value={body}
                  onChange={this.handleChange('body')}
                  placeholder="Body"
                  />
                </label>
                <label htmlFor="submit">
                  <input 
                  type="submit"
                  value="Create a Talltale"
                  >
                  </input>
                </label>

              </form>
          </div>
      )
    }

}

export default Talltalesform;