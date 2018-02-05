import youtubePlayer from 'youtube-player';


class Youtube{
    constructor(){
        this.player = null
        this.init();  
    }
    init(){
        this.setupPlayer()
    }
    setupPlayer(){
       
        this.player = youtubePlayer('player', {
            height: '70',
            width:'70'
            
        });
          
        
    }

    onPlayerStateChange(){

    }


   
    play(id){
        var _id = id;
        this.player.onPlayerStateChange()
        this.player.loadVideoById(_id);
        console.log(this.player)
    }
}

module.exports = Youtube;