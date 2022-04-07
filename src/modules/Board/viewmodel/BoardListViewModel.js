import { BoardListModel } from "../models";

export class BoardListViewModel {
  constructor(boardListModel, options = {}) {
    this.boardListModel = boardListModel;
    this.options = options;
  }

  getBoardDatas = () => {
    return null;
  };
}
