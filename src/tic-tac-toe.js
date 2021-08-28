class TicTacToe {
    currentPlayer = 'x';
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    constructor() {

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex]) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        if (this.currentPlayer == 'x') {
            this.currentPlayer = 'o';
        }
        else {
            this.currentPlayer = 'x';
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw() || this.noMoreTurns()) {
            return true;
        }
        return false;
    }

    getWinner() {
        let xMainDiagonal = 0;
        let oMainDiagonal = 0;
        let xAsideDiagonal = 0;
        let oAsideDiagonal = 0;
        for (let i = 0; i < this.gameField.length; i++) {
            let x = 0;
            let o = 0;
            if (this.gameField[i].every(player => player == "x") || this.gameField[i].every(player => player == "o")) {
                return this.gameField[i][0];
            }
            for (let j = 0; j < this.gameField[i].length; j++) {
                if (this.gameField[j][i] == 'x') {
                    x++;
                }
                if (this.gameField[j][i] == "o") {
                    o++;
                }
                if (i == j && this.gameField[j][i] == 'x') {
                    xMainDiagonal++;
                }
                if (i == j && this.gameField[j][i] == "o") {
                    oMainDiagonal++;
                }
                if (i + j == 2 && this.gameField[i][j] == "x") {
                    xAsideDiagonal++;
                }
                if (i + j == 2 && this.gameField[i][j] == "o") {
                    oAsideDiagonal++;
                }
            }
            if (x == 3) {
                return "x";
            }
            if (o == 3) {
                return "o";
            }
        }
        if (xMainDiagonal == 3 || xAsideDiagonal == 3) {
            return 'x';
        }
        if (oMainDiagonal == 3 || oAsideDiagonal == 3) {
            return 'o';
        }
        return null;
    }

    noMoreTurns() {
        for (let arr of this.gameField) {
            if (arr.includes(null)) {
                return false;
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() == null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
