import {AiFillDelete} from 'react-icons/ai'

import {
  ListItems,
  FirstSection,
  MusicImage,
  TitleSection,
  Name,
  Genre,
  Duration,
  SecondSection,
  DeleteButton,
} from './styled'

const VideoCard = props => {
  const {data, onDelete} = props
  const {imageUrl, name, genre, duration, id} = data

  const onDel = () => {
    onDelete(id)
  }

  return (
    <ListItems>
      <FirstSection>
        <MusicImage src={imageUrl} alt="track" />
        <TitleSection>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </TitleSection>
      </FirstSection>
      <SecondSection>
        <Duration>{duration}</Duration>
        <DeleteButton type="button" data-testid="delete" onClick={onDel}>
          <AiFillDelete color="#ffffff" size={25} onClick={onDel} />
        </DeleteButton>
      </SecondSection>
    </ListItems>
  )
}
export default VideoCard
