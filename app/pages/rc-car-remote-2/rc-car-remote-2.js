/**
 * Created by GStan on 31.05.2016.
 */
import {Page} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/rc-car-remote-2/rc-car-remote-2.html'
})

export class RcCarRemote2Page {

    constructor() {
        this.mouseHold = false;
        this.notMoving = true;
        this.x;
        this.y;
        this.posx;
        this.posy
    }

    mouseDown(e) {
        console.debug(e);
        this.mouseHold = true
    }

    mouseUp(e) {
        // console.debug(e);
        this.mouseHold = false;
        this.notMoving = true
    }

    mouseMove(e) {
        console.debug('mouse DOWN - ' + this.mouseHold);

        if (this.mouseHold) {
             console.debug(e);

            if(notMoving){

                this.x = e.offsetX;
                this.y = e.offsetY;

                this.notMoving = false
            }

            this.posx = e.pageX - this.x;
            this.posy = e.pageY - this.y;
            e.target.style.left = this.posx + 'px';
            e.target.style.top = this.posy + 'px'
        }
    }


    ngAfterViewInit() {
        console.debug(this.mouseHold)
    }
}
