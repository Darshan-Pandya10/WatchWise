import React, { useState } from 'react';

function Form({ getOptions , searchInput , refetch }) {

  const CurrentDate = new Date();
  let CurrentYear = CurrentDate.getFullYear();
  const [userInput , setUserInput ] = useState(searchInput)


  const handleChange = (e) => {
    const {name , value} = e.target
     setUserInput(prevState => ({
      ...prevState , [name] : value
     }))
  };

  console.log(userInput)

  const handleSubmit = (e) => {
    e.preventDefault()
    refetch()
    return getOptions(userInput)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-fit flex-col md:w-[36rem] md:flex-row md:justify-evenly md:items-center md:flex-wrap mx-auto my-16 px-4 py-8 bg-gray-100 rounded-lg">
      <label className="block mb-2">
        <span className="form-label">Movie Name*:</span>
        <input
          type="text"
          name='query'
          value={userInput.query}
          onChange={handleChange}
          required
          className='form-input'
        />
      </label>
      <label className="block mb-2">
        <span className="form-label">Adult:</span>
        <select
        name='includeAdult'
          value={userInput.includeAdult}
          onChange={handleChange}
          className="form-input-short cursor-pointer"
        >
          <option value="true" className='cursor-pointer'>True</option>
          <option value="false" className='cursor-pointer'>False</option>
        </select>
      </label>
      <label className="block mb-2">
        <span className="form-label">Language:</span>
        <input
          type="text"
          name='language'
          value={userInput.language}
          onChange={handleChange} 
          className="form-input-short"
        />
      </label>
      <label className="block mb-2">
        <span className="form-label">Year*:</span>
        <input
          type="number"
          name='year'
          value={userInput.year}
          onChange={handleChange}        
          className="form-input-short"
          max={CurrentYear}
        />
      </label>
      <p className='text-gray-700 font-semibold tracking-wider'>(*) required inputs.</p>
      <button type="submit" className="w-full font-semibold tracking-wider mt-4 py-2 bg-[#6366F1] text-white rounded-lg hover:bg-[#7376fd]">Submit</button>
    </form>
  );
}

export default Form;
