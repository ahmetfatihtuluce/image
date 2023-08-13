import searchImages from './api';
import './App.css';
import ImageList from './Components/ImageList';
import SearchHeader from './SearchHeader';
import {useState} from 'react'


function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
  const result = await searchImages(term);
  setImages(result);
  
}

  return (
    <div className="App">
        
        <SearchHeader search={handleSubmit} />
        <ImageList imagesPlaceholder={images} />
        
    </div>
  );
}

export default App;
