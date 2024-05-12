import Player from "./components/Player/Player"

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


        Board
      </div>
    </main>
  )
}

export default App
