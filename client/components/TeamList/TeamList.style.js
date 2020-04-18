import styled from 'styled-components'

const StyleTeamList = styled.div/*css*/ `
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: black 1px solid;
  border-radius: 0.5rem;
  margin: 1rem;

  div {
    background-color: white;
    border-bottom: 1px dashed black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-bottom: 5px;
  }

  .psychic {
    background-color: pink;
  }
`

export default StyleTeamList
