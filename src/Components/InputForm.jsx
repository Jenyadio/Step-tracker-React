import React from 'react'
import PropTypes from 'prop-types'

function InputForm({date, distance, onChange, onSubmit}) {

    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        onChange(name, value);
    };
    
    return (
        <form className="tracker-header" onSubmit={onSubmit}>
          <div className="date-input">
            <label htmlFor="date">Дата</label>
            <input type="date" name="date" id="date" value={date} onChange={handleChange} required/>
          </div>
          <div className="km-input">
            <label htmlFor="distance">Пройдено км</label>
            <input type="number" name="distance" id="distance" value={distance} onChange={handleChange} required/>
          </div>
          <div className="button-container">
            <button className="submit-btn">ОК</button>
          </div>
        </form>
    )
}

InputForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
}

export default InputForm

