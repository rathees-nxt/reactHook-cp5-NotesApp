// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  AppContainer,
  FormContainer,
  NotesHeading,
  Input,
  TextArea,
  AddButton,
  EmptyContainer,
  EmptyImg,
  EmptyHeading,
  EmptyPara,
  NotesListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNotes = event => setNotes(event.target.value)

  const listLength = notesList.length
  const onAddNotes = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      notes,
    }
    setNotesList(prevList => [...prevList, newNotes])
    setTitle('')
    setNotes('')
  }

  return (
    <MainContainer>
      <AppContainer>
        <NotesHeading>Notes</NotesHeading>
        <FormContainer onSubmit={onAddNotes}>
          <Input placeholder="Title" onChange={onChangeTitle} value={title} />
          <TextArea
            placeholder="Take a Note..."
            onChange={onChangeNotes}
            value={notes}
            rows="4"
            cols="100"
          >
            Take a Note...
          </TextArea>
          <AddButton type="submit">Add</AddButton>
        </FormContainer>
        {listLength <= 0 ? (
          <EmptyContainer>
            <EmptyImg
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyHeading>No Notes Yet</EmptyHeading>
            <EmptyPara>Notes you add will appear here</EmptyPara>
          </EmptyContainer>
        ) : (
          <NotesListContainer>
            {notesList.map(eachNote => (
              <NoteItem key={eachNote.id} notesList={eachNote} />
            ))}
          </NotesListContainer>
        )}
      </AppContainer>
    </MainContainer>
  )
}

export default Notes
