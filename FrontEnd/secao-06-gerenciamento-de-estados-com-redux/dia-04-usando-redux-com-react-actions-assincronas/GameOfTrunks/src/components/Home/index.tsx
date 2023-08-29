import {useSelector } from "react-redux"
import {  StateType, CharacterType } from "../../types"

function Home() {
  const { characters, isFetching, error } = useSelector((state: StateType) => state);

  if (!isFetching && characters.length > 0) {
    return (
      characters.map((character: CharacterType) => (
        <ul>
          <li>Name: {character.name}</li>
          <li>Born: {character.born}</li>
          {character.died && <li>Died: {character.died}</li>}
          <li>
            Titles:
            <ol>
              {character.titles.map((title, index) => (
                <li key={`${title}-${index}`}>{title}</li>
              ))}
            </ol>
          </li>
          <li>
            Aliases:
            <ol>
              {character.aliases.map((alias, index) => (
                <li key={`${alias}-${index}`}>{alias}</li>
              ))}
            </ol>
          </li>
        </ul>
      ))
    );
  }
  if (error) { return <div>{error}</div>; }
  if (isFetching) { return <h3>Loading...</h3>; }
  return <div>Type a character name and click to search!</div>;
}

export default Home