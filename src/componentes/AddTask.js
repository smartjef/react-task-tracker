import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task!')
            return
        }
        if(!day){
            alert('Please add a day & time!')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) =>  setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type="datetime-local" className='form-controller' value={day} placeholder="Add Day & Time" onChange={(e) =>  setDay(e.target.value)}/>
        </div>
        <div className='form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" className='form-control' checked={reminder} value={reminder} onChange={(e) =>  setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"/> 
    </form>
  )
}

export default AddTask
