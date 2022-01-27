import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          className="notes__title-input"
          name=""
          placeholder="Some awesome title"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
        />
        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528__340.jpg"
            alt="una imágen"
          />
        </div>
      </div>
    </div>
  )
}

export default NoteScreen
