import styled from 'styled-components'

export const ListItems = styled.li`
  list-style: none;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
export const FirstSection = styled.div`
  display: flex;
`
export const MusicImage = styled.img`
  border-radius: 5px;
  width: 300px;
  height: 200px;
  margin-right: 15px;
  @media screen and (max-width: 666px) {
    width: 150px;
    height: 100px;
  }
`

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.p`
  font-size: 28px;
  font-family: 'roboto';
  color: #ffffff;
  @media screen and (max-width: 666px) {
    font-size: 20px;
  }
`

export const Genre = styled.p`
  font-family: 'roboto';
  color: #3b82f6;
  @media screen and (max-width: 666px) {
    font-size: 15px;
  }
`

export const SecondSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  font-size: 25px;
  font-family: 'roboto';
  color: #ffffff;
  margin-right: 10px;
  @media screen and (max-width: 666px) {
    font-size: 18px;
  }
`
export const DeleteButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
