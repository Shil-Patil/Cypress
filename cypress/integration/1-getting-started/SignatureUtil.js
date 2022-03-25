
const data = require('./example.json');
const HmacSHA256=require('crypto-js/hmac-sha256');
const DateTime = require('luxon');



const getPar = function()
{let par= new Map();
    par.set('Action',data.Action)
    par.set('Format',data.format)
    par.set('UserID',data.sc_uname)
    par.set('Version',data.version)
    par.set('Timestamp',data.date)
 return par
}

let param = new Map()
param =getPar()


const getISO8601 =function()
{
    var now =DateTime.DateTime.now()
    now=now.toFormat('yyyy-MM-dd') + 'T' + now.toFormat('HH:mm:ssZZ')
    return now.toString()
}
const time =getISO8601()
console.log(time)
//param.set('Timestamp',time)

var qsp_sort= new Map([...param.entries()].sort());
console.log(qsp_sort)

const Qsp = function(getPar)
{
    let qsp=''
    for(const [key,value] of getPar.entries())
    { 
        qsp = qsp + key + '=' + encodeURIComponent(value) + '&'  
    } 
    
    //qsp = qsp + "Timestamp="+encodeURIComponent(time)
    return qsp.substring(0,qsp.length-1)
}
let QspFinal =Qsp(qsp_sort)
console.log(QspFinal+"\n")

//console.log(HmacSHA256(data.samp_qsp,data.api_key).toString())

const sign=HmacSHA256(QspFinal,data.api_key).toString()
console.log(sign)

var T_S={
    "time1" : time,
    "sign1" :sign
}
