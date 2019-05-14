class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    
    $('ul').on('click', 'li', (e) => {
        this.makeMove($(e.target));
    });

  }

  makeMove($square) {
    let pos = $square.data("pos");
    if( !this.game.board.isEmptyPos(pos)){
      alert("You already went there!!");
      return;
    }
    $square.text(this.game.currentPlayer);
    $square.addClass(this.game.currentPlayer);
    this.game.playMove(pos);
    if(this.game.isOver()){
      console.log("Player " + this.game.winner() + " wins!!");
      this.$el.append("<span>");
      $("span").text("Player " + this.game.winner() + " wins!!");
      let $winners = $('.'+this.game.winner());
      $winners.addClass('winner');
      $('ul').off();
      let $losers = $('li').not('.'+this.game.winner());
      $losers.addClass('loser');
    }
  }

  setupBoard() {
    this.$el.append('<ul>');
    const $ul = $('ul');
    $ul.addClass('group');
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $('<li>');
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
  }
  
}
module.exports = View;
