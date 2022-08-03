import React from 'react'
import PropTypes from 'prop-types'

function ListElement({date, distance, onEdit, onRemove}) {

    return (
      <li className="body-element">
        <span className="body-date">{date}</span>
        <span className="body-km">{distance}</span>
        <button className="body-btn edit" title='Edit' onClick={onEdit}>✎</button>
        <button className="body-btn delete" title='Delete' onClick={onRemove}>✘</button>
      </li>
    )
}

ListElement.propTypes = {
    date: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default ListElement

