import React, {useState} from 'react'
import TrackerList from './TrackerList';
import InputForm from './InputForm';
import {nanoid} from 'nanoid';

function Tracker() {

    const [form, setForm] = useState({date: '', distance: ''});
    const [list, setList] = useState([])

    const handleChange = (name, value) => {
        setForm(prevFrom => ({...prevFrom, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newList = Array.from(list);

        const exist = newList.findIndex((o) => new Date(o.date).getTime() === new Date(form.date).getTime());
        if (exist !== -1) {
            newList[exist].distance =
            Number(newList[exist].distance) + Number(form.distance);
        } else {
            newList.push({
                id: nanoid(),
                date: form.date,
                distance: form.distance,
            });
        }

        if (newList.length > 1) {
            newList = newList.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        setList(newList);
        setForm({
          date: "",
          distance: "",
        });    
    };

    const handleRemove = (e, id) => {
        e.preventDefault();
        setList((prevList) => prevList.filter((o) => o.id !== id));
    };

    const handleEdit = (e, id) => {
        e.preventDefault();
        const editableRecord = list.find((o) => o.id === id);
        setForm({ date: editableRecord.date, distance: editableRecord.distance });
        handleRemove(e, id);
    };
    

    return (
      <div className="tracker-container">
        <h2 className="tracker-name">Трекер прогулок</h2>
        <InputForm 
          date={form.date} 
          distance={form.distance}
          onChange={handleChange} 
          onSubmit={handleSubmit} 
        />
        <TrackerList list={list} onRemove={handleRemove} onEdit={handleEdit} />
      </div>
    )
}

export default Tracker
