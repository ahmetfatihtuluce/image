import { useState } from "react";


function SearchHeader({search}) {
  

  const [valueInput, setValueInput] = useState('')
  const handleFormSubmit = (event) => {
      event.preventDefault();
      
      search(valueInput); 
  };

  const handleChange = (event) => {
      setValueInput(event.target.value) ;
  }

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>What Are You Looking For?</label>
        <input value={valueInput} onChange={handleChange} />
        
      </form>
    </div>
  );
}

export default SearchHeader;
