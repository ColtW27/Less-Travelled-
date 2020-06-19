import React from 'react';

class AttractionForm extends React.Component {
  constructor(props) {
    super(props);
    this.coords = {lat: props.lat, lng: props.lng}
    this.state = {
      name: '',
      description: '',
      address: '',
      rating: "",
      location_data: `${this.coords}`,
      imageUrl: '' 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFile = this.handleFile.bind(this);
  }

  update(key) {
    return e => this.setState({
      [key]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const attraction = Object.assign({}, this.state);
    this.props.createAttraction(attraction) 
    .then(()=> this.props.history.push('/attractions'))
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  render () {
    const { name, description, address, rating, imageUrl } = this.state;
    const { lat, lng} = this.coords;

    return (
      <div className="attraction-form">

        <div className="new-attraction-container">

          <p>Add an attraction:</p>

          <div className="insideDiv">

            <form onSubmit={this.handleSubmit}>

              {/* <label className="attraction-field">Name</label> */}
              <input
                type="text"
                value={name}
                onChange={this.update('name')}
                className="attraction-field"
                placeholder="Name"
              />

              {/* <label className="attraction-field">Description</label> */}
              <input
                type="text"
                value={description}
                onChange={this.update('description')}
                className="attraction-field"
                placeholder="Description"
              />

              {/* <label className="attraction-field">Address</label> */}
              <input
                type="text"
                value={address}
                onChange={this.update('address')}
                className="attraction-field"
                placeholder="Address"
              />

              {/* <label className="attraction-field">Add a photo</label>
              <input
                type="file"
                value={photoFile}
                onChange={this.handleFile}
                className="attraction-field"
              /> */}

              {/* <label className="attraction-field">Rating</label> */}
              <input
                min="0"
                max="5"
                type="number"
                value={rating}
                onChange={this.update('rating')}
                className="attraction-rating"
                id="rating"
                placeholder="Rating"
              />

              {/* <label className="attraction-field">Latitude</label> */}
              <input
                type="text"
                onChange={this.update('lat')}
                value={lat}
                className="attraction-field"
                placeholder="Latitude"
              />

              {/* <label className="attraction-field">Longitude</label> */}
              <input
                type="text"
                onChange={this.update('lng')}
                value={lng}
                className="attraction-field"
                placeholder="Longitude"
              />

              <input
                type="text"
                onChange={this.update('imageUrl')}
                value={imageUrl}
                className="attraction-photo-file"
                placeholder="Browse"
              />

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
                  value="Add this attraction"
                  className="new-attraction-button"
                />
              </div>
            </form>
            {/* <footer>
              this is the footer
            </footer> */}
          </div>
        </div>
      </div>
    )
  }



}


export default AttractionForm