import Youtube from './youtube'
var $ = require('jquery')

class record{
  constructor(target){
    this.target = target
    this.u = new Youtube();
    this.isplay = false;
    this.current_id = 0;
    this.intl_obj;
  }

  init(){
    this.clickHandler(this.target)
  }

  clickHandler
}
