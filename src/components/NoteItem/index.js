// Write your code here
import {NoteListContainer, ListHeading, ListPara} from './styledComponents'

const NoteItem = props => {
  const {notesList} = props
  const {title, notes} = notesList
  return (
    <NoteListContainer>
      <ListHeading>{title}</ListHeading>
      <ListPara>{notes}</ListPara>
    </NoteListContainer>
  )
}

export default NoteItem
