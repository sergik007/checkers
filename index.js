  var board = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, -1, 0, -1, 0, -1, 0, -1],
            [-1, 0, -1, 0, -1, 0, -1, 0],
            [0, -1, 0, -1, 0, -1, 0, -1]
        ];

  function init() {
      var container = document.getElementById("container");
      var row = document.getElementById("row");
      var cell = document.createElement('div');
      cell.className += "cell";
      var check = document.createElement('img');
      check.className += " checker-img";
      for (var i = 0; i < 8; i++) {
          var cloneRow = row.cloneNode(false);
          var cloneCell = cell.cloneNode(false);
          cloneCell.className += " col-lg-2";
          cloneRow.appendChild(cloneCell);
          for (var j = 0; j < 8; j++) {
              var cloneCell = cell.cloneNode(false);
              cloneCell.className += " col-lg-1";
              if ((i + j) % 2 == 0) {
                  cloneCell.className += " black-cell";
              }
              if (board[i][j] != 0) {
                  var tempCheck = check.cloneNode(false);
                  tempCheck.setAttribute('draggable', true);
                  if (board[i][j] == 1) {
                      tempCheck.setAttribute('src', 'you1.gif');
                      cloneCell.appendChild(tempCheck);
                  }
                  if (board[i][j] == -1) {
                      tempCheck.setAttribute('src', 'me1.gif');
                      cloneCell.appendChild(tempCheck);
                  }
              }
              cloneRow.appendChild(cloneCell);
          }
          container.appendChild(cloneRow);
      }
  };
