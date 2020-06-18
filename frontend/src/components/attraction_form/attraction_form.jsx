import React from 'react';

class AttractionForm extends React.Component {
  constructor(props) {
    super(props);
    this.coords = {lat: props.lat, lng: props.lng}
    this.state = {
      name: '',
      description: '',
      address: '', // #### MAY CHANGE NAME
      // photoFile: null,
      // rating: 3,
      location_data: 'hello there' ,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFile = this.handleFile.bind(this);
  }

  update(key) {
    return e => this.setState({
      [key]: e.target.value
    });
  }

  // handleFile(e) {
  //   this.setState({photoFile: e.currentTarget.files[0]})
  // }

  handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('attractions[title]', this.state.title)
    // formData.append('attractions[description]', this.state.description)
    // formData.append('attractions[whyLoveIt]', this.state.whyLoveIt)
    // formData.append('attractions[photoFile]', this.state.photoFile)
    // formData.append('attractions[rating]', this.state.rating)
    // this.props.createAttraction(formData)
    // formData.append('form[location]', this.state.rating)
    const attraction = Object.assign({}, this.state);
    this.props.createAttraction(attraction);
  }

  render () {
    const { name, description, address, location_data } = this.state;
    const { lat, lng} = this.coords;


    return (
      <div>

        <h2>Add an attraction:</h2>

        <div className="new-attraction-container">
          <form onSubmit={this.handleSubmit}>

            <label className="attraction-field">Name</label>
            <input
              type="text"
              value={name}
              onChange={this.update('name')}
              className="attraction-field"
            />

            <label className="attraction-field">Description</label>
            <input
              type="text"
              value={description}
              onChange={this.update('description')}
              className="attraction-field"
            />

            <label className="attraction-field">Address</label>
            <input
              type="text"
              value={address}
              onChange={this.update('address')}
              className="attraction-field"
            />

            {/* <label className="attraction-field">Add a photo</label>
            <input
              type="file"
              value={photoFile}
              onChange={this.handleFile}
              className="attraction-field"
            /> */}

            {/* <label className="attraction-field">Rating</label>
            <input
              min="0"
              max="5"
              type="number"
              value={rating}
              onChange={this.update('rating')}
              className="attraction-field"
            /> */}

            <label className="attraction-field">Latitude</label>
            <input
              type="text"
              onChange={this.update('location_data')}
              value={location_data}
              className="attraction-field"
            />

            {/* <label className="attraction-field">Longitude</label>
            <input
              type="text"
              onChange={this.update('lng')}
              value={lng}
              className="attraction-field"
            /> */}



            {/* <div className="button-holder">
              <button
                onClick={this.handleCloudinary}
                className="new-attraction-button"
              >
                Add image
              </button>
            </div> */}



            <hr />



            <div className="button-holder">
              <input
                type="submit"
                value="Create site"
                className="new-attraction-button"
              />
            </div>
          </form>
        </div>
      </div>
    )
  }



}


export default AttractionForm