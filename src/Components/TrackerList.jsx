import React from 'react'
import PropTypes from 'prop-types'
import ListElement from './ListElement';

function TrackerList({list, onRemove, onEdit}) {

    return (
        <div className="tracker-list">
          <div className="tracker-list-header">
            <span>Дата(ГГГГ.ММ.ДД)</span>
            <span>Пройдено км</span>
            <span>Действия</span>
          </div>
          <ul className="tracker-list-body">
            {
              list.map((o) => 
                 <ListElement 
                   key={o.id} 
                   date={o.date} 
                   distance={o.distance} 
                   onEdit={(e) => onEdit(e, o.id)} 
                   onRemove={(e) => onRemove(e, o.id)}
                 />
              )
            }
          </ul>
        </div>
    )
}

TrackerList.propTypes = {
  list: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default TrackerList

