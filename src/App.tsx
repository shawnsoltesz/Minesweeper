import React, { useState } from 'react'

export function App() {
  const [game, setGame] = useState({
    board: [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ],
    id: null,
    winner: null,
  })

  return (
    <div>
      <h1>
        Minesweeper - <button>New</button>
      </h1>
      <ul>
        <li>{game.board[0][0]}</li>
        <li>{game.board[0][1]}</li>
        <li>{game.board[0][2]}</li>
        <li>{game.board[0][3]}</li>
        <li>{game.board[0][4]}</li>
        <li>{game.board[0][5]}</li>
        <li>{game.board[0][6]}</li>
        <li>{game.board[0][7]}</li>
        <li>{game.board[1][0]}</li>
        <li>{game.board[1][1]}</li>
        <li>{game.board[1][2]}</li>
        <li>{game.board[1][3]}</li>
        <li>{game.board[1][4]}</li>
        <li>{game.board[1][5]}</li>
        <li>{game.board[1][6]}</li>
        <li>{game.board[1][7]}</li>
        <li>{game.board[2][0]}</li>
        <li>{game.board[2][1]}</li>
        <li>{game.board[2][2]}</li>
        <li>{game.board[2][3]}</li>
        <li>{game.board[2][4]}</li>
        <li>{game.board[2][5]}</li>
        <li>{game.board[2][6]}</li>
        <li>{game.board[2][7]}</li>
        <li>{game.board[3][0]}</li>
        <li>{game.board[3][1]}</li>
        <li>{game.board[3][2]}</li>
        <li>{game.board[3][3]}</li>
        <li>{game.board[3][4]}</li>
        <li>{game.board[3][5]}</li>
        <li>{game.board[3][6]}</li>
        <li>{game.board[3][7]}</li>
        <li>{game.board[4][0]}</li>
        <li>{game.board[4][1]}</li>
        <li>{game.board[4][2]}</li>
        <li>{game.board[4][3]}</li>
        <li>{game.board[4][4]}</li>
        <li>{game.board[4][5]}</li>
        <li>{game.board[4][6]}</li>
        <li>{game.board[4][7]}</li>
        <li>{game.board[5][0]}</li>
        <li>{game.board[5][1]}</li>
        <li>{game.board[5][2]}</li>
        <li>{game.board[5][3]}</li>
        <li>{game.board[5][4]}</li>
        <li>{game.board[5][5]}</li>
        <li>{game.board[5][6]}</li>
        <li>{game.board[5][7]}</li>
        <li>{game.board[6][0]}</li>
        <li>{game.board[6][1]}</li>
        <li>{game.board[6][2]}</li>
        <li>{game.board[6][3]}</li>
        <li>{game.board[6][4]}</li>
        <li>{game.board[6][5]}</li>
        <li>{game.board[6][6]}</li>
        <li>{game.board[6][7]}</li>
      </ul>
    </div>
  )
}
