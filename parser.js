/*
Errors:
400 Message Part missing/corrupt
401 Middle part of multi message
402 Wrong Port
404 callData empty
*/

function Decoder(bytes, port, timestamp, frame_counter, callData) {
    var obj = new Object();

    var buf = new ArrayBuffer(bytes.length);

    var view = new DataView(buf);
    for (j = 0; j < bytes.length; j++) {
        view.setUint8(j, bytes[j]);
    }
    //parse the data here
    obj.example=view.getUint8(0);
    return obj;
}

//for multipayload messages
function CheckDataExist(bytes, port, timestamp, frame_counter, url) {
    var obj = new Object();

    var buf = new ArrayBuffer(bytes.length);

    var view = new DataView(buf);
    for (j = 0; j < bytes.length; j++) {
        view.setUint8(j, bytes[j]);
    }

    //return createLimitCallData(url, new Date().getTime(), 20, true);

    //return createBetweenTimestampsCallData(url, 0, new Date().getTime(), true);

    return null;
}
//for multipayload messages
function createBetweenTimestampsCallData(url, gte, lte, includeUnmapped) {
    var obj = new Object();
    obj.url = url + '/dsreader-internal/' + gte + '/' + lte;
    obj.includeUnmapped = includeUnmapped;
    obj.callId = 'betweents';
    obj.numberPackets = 0;
    return obj;
}
//for multipayload messages
function createLimitCallData(url, lte, packetCount, includeUnmapped) {
    var obj = new Object();
    obj.url = url + '/dsreader-internal/' + lte;
    obj.includeUnmapped = includeUnmapped;
    obj.callId = 'limit';
    obj.numberPackets = packetCount;
    return obj;
}

function map2EMT(jsondoc) {
    /*
     * This function takes the data.unmapped values and puts them into the right place
     * in order to use TTN standard parsers
     */

    jsondoc = JSON.parse(jsondoc);

    /* Check that the needed elements are here */
    if (!('data' in jsondoc)) {
        return jsondoc;
    }

    if (!('unmapped' in jsondoc.data)) {
        return jsondoc;
    }

    if ('expiresOn' in jsondoc['ts']) {
        delete jsondoc['ts']['expiresOn'];
    }

    return jsondoc;
}



function Decoder(bytes, port, timestamp, frame_counter, callData) {
    var obj = new Object();

    var buf = new ArrayBuffer(bytes.length);

    var view = new DataView(buf);
    for (j = 0; j < bytes.length; j++) {
        view.setUint8(j, bytes[j]);
    }
    //parse the data here
    obj.example=view.getUint8(0);

    obj.humidity = view.getUint8(1);
    obj.humidity = obj.humidity/2;

    obj.time_uplink = view.getUint32(3);

    obj.battery = view.getUint8(0);
    obj.battery = obj.battery%32/16;
    obj.battery = Math.floor(obj.battery);
    if(obj.battery === 0){
    obj.battery = false;
    }else{
    obj.battery = true;
    };

    obj.uplink_freq = view.getUint8(0);
  
    switch(obj.uplink_freq){
        case 0x00:
            obj.uplink_freq = "minutely";
            break;
        case 0x01:
            obj.uplink_freq = "quarter hourly";
            break;
        case 0x02:
            obj.uplink_freq = "half hourly";
            break;
        case 0x03:
            obj.uplink_freq = "hourly";
            break;
        case 0x04:
            obj.uplink_freq = "every 6 hours";
            break;
        case 0x05:
            obj.uplink_freq = "every 12 hours";
            break;
        case 0x06:
            obj.uplink_freq = "daily";
            break;
        case 0x07:
            obj.uplink_freq = "every three days";
            break;
        case 0x08:
            obj.uplink_freq = "weekly";
            break;
        case 0x09:
            obj.uplink_freq = "monthly";
            break;
        default:
            break;
    }  
    
    return obj;
}