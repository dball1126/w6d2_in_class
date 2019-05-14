class View{
    constructor(game, $el){
        this.game = game;
        this.$el = $el;
        this.setupTowers();

    }

    setupDiscs(){

    }

    setupTowers(){
        this.$el.append('<ul>');
        let $ul = $('ul');
        $ul.addClass('group');
        

        for (let i = 0; i < 3; i++) {
                let $li = $('<li>');
                $li.data("pos", i);
                $ul.append($li);
            }
        }

}

module.exports = View;