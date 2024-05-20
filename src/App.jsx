import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
function App() {
  

  return (
    <main>

      {/* the main container that holds the gAME */}
      <div id="game-container">

        {/* An ordered list that tells the player details */}
        <ol id="players">

          {/* player detail */} 
          <Player name="Player 1" symbol={"X"} />

          {/* player detail */} 
          <Player name="Player 2" symbol={"O"} />
        </ol>


        <GameBoard/>
      </div>
    </main>
  )
}

export default App
