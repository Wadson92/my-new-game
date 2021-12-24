import React from "react";
import { GAME_SIZE } from "../../settings/constants";
import Hero from "../Hero";

const Board = () => {
  return (
    <div>
      <Hero />
      <img src='./Assets/tileset.gif' alt='' width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  )
}

export default Board;
