import { BoardActionModel } from "../models";

export class BoardActionViewModel {
  constructor(boardActionModel, options = {}) {
    this.boardActionModel = boardActionModel;
    this.options = options;
  }
}
