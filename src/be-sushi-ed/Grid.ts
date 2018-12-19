import Cell from "./Cell";
import Coords from "./Coords";

type GeneratorType = "solid" | "randomNormal" | "smartNormal";

export default class Grid {
  _w: number; _h: number;
  _cells: Array<Array<Cell>>

  constructor(w: number, h: number, generatorType: GeneratorType, fillCell?: Cell) {
    this._w = w;
    this._h = h;
    this._cells = this.genCells(generatorType);

    console.log(Coords);
  }

  genCells(generatorType: GeneratorType, fillCell?: Cell) {
    let generator: () => Cell;
    switch(generatorType) {
      case "solid":
      let cell = fillCell || new Cell("normal", 0);
      generator = () => cell;
      break;

      case "randomNormal":
      generator = () => new Cell("normal", Math.floor(Math.random() * (Cell.maxColor + 1)));
      break;

      case "smartNormal":

    }


    let cells = new Array(this._w);
    for (let x = 0; x < this._w; x++) {
      cells[x] = new Array(this._h);
      let col = cells[x];
      for (let y = 0; y < this._h; y++) {
        col[y] = new Cell("flaming", 0);
      }
    }
    return cells;
  }

  Cell(x: number, y: number) {

  }
}