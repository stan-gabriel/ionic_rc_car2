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
        this.x;
        this.y;
        this.posX;
        this.posY;
    }

    mouseDown(e) {
        this.mouseHold = true
    }

    mouseUp(e) {
        this.mouseHold = false;
    }

    mouseMove(e) {
        console.debug('mouse DOWN - ' + this.mouseHold);

        if (this.mouseHold) {
            this.x = e.offsetX;
            this.y = e.offsetY;

            this.posX = e.pageX - this.x;
            this.posY = e.pageY - this.y;
            e.target.style.left = this.posx + 'px';
            e.target.style.top = this.posy + 'px'
        }
    }


    ngAfterViewInit() {
        var self = this;
        jQuery('#engineJoystick').on('mousedown', (e) => {
            self.mouseHold = true;
            self.initialX = e.pageX;
            self.initialY = e.pageY;
        });
        jQuery(document).on('mouseup', () => {
            self.mouseHold = false;
        });
        jQuery(document).on('mousemove', (e) => {
            if (self.mouseHold) {

            }
        });
    }

}
