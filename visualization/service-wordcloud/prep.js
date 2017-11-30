'use strict';

 var r = require("./raw.json");
var alasql = require('alasql');

//console.log(r);
var map = alasql('select targetname as key ,count(*) as [value] from ? group by targetname' , [ r ]);

var map2 = alasql('select * from ? order by [value] DESC' , [ map ]);
console.log(map2);

//var group = alasql('select rfsname from ? as M where psname= ?' , [ map, 'Integrated Messaging and Presence' ]);
//var group = alasql('select rfsname from ? as M where psname= ?' , [ map, 'Call Center Agent Basic' ]);

// group.forEach(function(e){
//     console.log(e.rfsname)
// })
