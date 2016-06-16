/**
 * Created by GStan on 31.05.2016.
 */
import {Page} from 'ionic-angular';



@Page({
    templateUrl: 'build/pages/rc-car-remote-1/rc-car-remote-1.html'
})
export class RcCarRemote1Page {

    onPageWillEnter() {
        console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");
        var joystick	= new VirtualJoystick({
            container	: document.getElementById('joystick1'),
            mouseSupport	: true
        });
        joystick.addEventListener('touchStart', function(){
            console.log('down')
        });
        joystick.addEventListener('touchEnd', function(){
            console.log('up')
        });

        var outputEl	= document.getElementById('result');

        this.intervalJoystick = setInterval(function(){
            outputEl.innerHTML	= '<b>Result:</b>'
                + ' dx:'+joystick.deltaX()
                + ' dy:'+joystick.deltaY()
                + (joystick.right()	? ' right'	: '')
                + (joystick.up()	? ' up'		: '')
                + (joystick.left()	? ' left'	: '')
                + (joystick.down()	? ' down' 	: '')
        }, 1/30 * 1000);
    }

    onPageWillUnload(){
        clearInterval(this.intervalJoystick);
    }

    constructor() {
    }
}
