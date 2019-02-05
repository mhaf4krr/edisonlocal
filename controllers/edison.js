var mraa = require('mraa');
var led1 = new mraa.Gpio(4);
/* selects it for output*/
led1.dir(mraa.DIR_OUT);
/*switch it off initially*/
led1.write(0);


/* Starting Analog Values */
var analogPin0 = new mraa.Aio(0);


var ledStatus = false;

function getAnanlogValue(){
    return analogPin0.read();
}


var toggle = () =>{

    if(ledStatus){
        console.log("Switching Off");
        ledStatus = false;
        led1.write(0);
    }

    else {
        console.log("Switching On");
        ledStatus = true;
        led1.write(1);
    }

}

function getState(){
    return ledStatus;
}

module.exports = {
    ledToggle : toggle,
    ledState : getState,
    getAnalogValue : getAnanlogValue
};
