'use strict';

var alasql = require('alasql');

var pd_cfs = require("../../build/PD-CFS.json");

var cfs = require("../../build/CFS.json");

var pd = require("../../build/PD.json");

//console.log(pd_cfs);
var map = alasql('select * from ? as PD join ? as PC on PD.pdCode = PC.ps2' , [ pd, pd_cfs ]);

//console.log(map);
console.log(pd.length);
console.log(pd_cfs.length);
console.log(map.length);

var map2 = alasql('select P.guid as sourceId, P.name as sourceName, C.name as targetName , C.guid as targetId from ? as P join ? as C on P.cfs = C.id' , [ map, cfs ]);

console.log(map2);
console.log(map2.length);


//var group = alasql('select rfsname from ? as M where psname= ?' , [ map, 'Integrated Messaging and Presence' ]);
//var group = alasql('select rfsname from ? as M where psname= ?' , [ map, 'Call Center Agent Basic' ]);

// group.forEach(function(e){
//     console.log(e.rfsname)
// })
