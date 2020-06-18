import axios from "axios"; 

export const fetchAttractions = () => {
  return axios.get('/api/attractions')
};

export const fetchAttraction = id => {
  return axios.get(`/api/attractions/${id}`)
};

// export const createReview = review => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/reviews',
//     data: { review }
//   })
// );

export const createAttraction = data => {
  return axios.post('/api/attractions', data)
}; 


