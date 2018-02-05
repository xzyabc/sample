import Youtube from './youtube'
var $ = require('jquery')

class Record{

    constructor(target){
        this.target = $(target)
        this.youtube = new Youtube();
        this.isplay = false;
        this.current_id = 0;
        this.intl_obj;
        this.deg_list = [];   
    }

    init(){
        this.clickHandler();
        this.pushDeglist();
    }

    pushDeglist(){
        const $records = document.getElementsByClassName('item')
        
        for(let i=0; i<$records.length; i++){
            this.deg_list.push(0);
        }
        //console.log('->'+this.deg_list.push(0))
        
    }

    clickHandler(){
        this.target.on('click',
            e => {
                clearInterval(this.intl_obj)
                
                if(this.isplay == false || this.current_id !== e.currentTarget.id){
                    this.current_id = e.currentTarget.id
					this.play();
                }else{
                    this.stop();
                }
                this.isplay = !this.isplay;
            }
        )
    }
    play(){
        this.lotate();
        
        this.youtube.play($('.item#'+this.current_id).attr('data-youtube'));
        //console.log($('.item#'+this.current_id).attr('data-youtube'))
    }
    stop(){
        clearInterval(this.intl_obj)
    }
    lotate(){
    
        let current_id = this.current_id;
        var $_dom = $(document.getElementById(current_id))
        
        this.intl_obj = setInterval(()=>{
            this.deg_list[current_id]++;

            //$_dom.css('transform','rotate('+this.deg_list[current_id]+'deg)')
            document.getElementById(current_id).style.transform = 'rotate('+this.deg_list[current_id]+'deg)';
            //$('.item#'+current_id).css('transform','rotate('+this.deg_list[current_id]+'deg)')
        }, 10);
    }
}

module.exports = Record;