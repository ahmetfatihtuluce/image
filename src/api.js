import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
      Authorization:'Client-ID UZzkXA58761vTtH-9wQcMA5QIjiX9JTK__OrEGo5YfE'  
      },
      params:  {
        query:term
      }
      })
      
      return response.data.results;
};



export default searchImages;