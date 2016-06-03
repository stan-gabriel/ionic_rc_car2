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
        console.log('Constructor call');
        var joystick	= new VirtualJoystick({
            container	: document.getElementById('joystick'),
            mouseSupport	: true
        });
        joystick.addEventListener('touchStart', function(){
            console.log('down')
        });
        joystick.addEventListener('touchEnd', function(){
            console.log('up')
        });

        setInterval(function(){
            var outputEl	= document.getElementById('result');
            outputEl.innerHTML	= '<b>Result:</b> '
                + ' dx:'+joystick.deltaX()
                + ' dy:'+joystick.deltaY()
                + (joystick.right()	? ' right'	: '')
                + (joystick.up()	? ' up'		: '')
                + (joystick.left()	? ' left'	: '')
                + (joystick.down()	? ' down' 	: '')
        }, 1/30 * 1000);
    }

    constructor() {

    }
}
