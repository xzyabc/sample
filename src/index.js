import $ from 'jquery';
import 'slick-carousel';
import 'slick/slick.css'

export default class Carousel {
    constructor(selector) {
        this.$el = $(selector);
        this.init();
    }

    init() {
      console.log(this.$el)
        this.$el.slick({
            dots: true,
            autoplay: true,
              speed: 400,
              dotsClass: 'dot-class',
        });
    }
}

var c = new Carousel('.slider')