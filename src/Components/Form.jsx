import React, { useState } from 'react';

function Form({ onSubmit , refetch }) {

  const CurrentDate = new Date();
  let CurrentYear = CurrentDate.getFullYear();
  const [query, setQuery] = useState('');
  const [includeAdult, setIncludeAdult] = useState(false);
  const [language, setLanguage] = useState('en-US');
  const [year, setYear] = useState(CurrentYear);

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch()
    onSubmit({
      query,
      includeAdult,
      language,
      year
    });
  };

  return (
    <form className="flex w-fit flex-col md:w-[36rem] md:flex-row md:justify-evenly md:items-center md:flex-wrap mx-auto my-16 px-4 py-8 bg-gray-100 rounded-lg">
      <label className="block mb-2">
        <span className="form-label">Movie Name*:</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          className='form-input'
        />
      </label>
      <label className="block mb-2">
        <span className="form-label">Adult:</span>
        <select
          value={includeAdult}
          onChange={(e) => setIncludeAdult(e.target.value === 'true')}
          className="form-input-short"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </label>
      <label className="block mb-2">
        <span className="form-label">Language:</span>
        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="form-input-short"
        />
      </label>
      <label className="block mb-2">
        <span className="form-label">Year*:</span>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="form-input-short"
          max={CurrentYear}
        />
      </label>
      <p className='text-gray-700 font-semibold tracking-wider'>(*) required input.</p>
      <button onClick={handleSubmit} type="submit" className="w-full font-semibold tracking-wider mt-4 py-2 bg-[#6366F1] text-white rounded-lg hover:bg-[#9193f7]">Submit</button>
    </form>
  );
}

export default Form;
