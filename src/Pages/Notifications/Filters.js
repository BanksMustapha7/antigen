import React from 'react';

export const Filters = ({filter, setFilter}) => {
  return (
    <div className='filterRow'>
      <span>
        <input type="date" value={filter || ''}
        className='dateFilter'
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "date")}
        placeholder="Search by Date"
        onChange ={e => setFilter(e.target.value)} />
      </span>
      <span>
        <select 
         onChange={ e=> setFilter(e.target.value)} 
         className='optionFilter'
         >
          <option value='' >All</option>
          <option value='Successful' >Successful Vacc.</option>
          <option value='pending' >Pending Vacc.</option>
        </select>
      </span>
    </div>
  )
}