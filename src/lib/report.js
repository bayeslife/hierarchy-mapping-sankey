'use strict';

//cfsNodes
//rfsNodes
//psNodes

//ps_cfs_nodes
//cfs_rs_nodes

console.log(rfsNodes);
var map = alasql('select PC.sourcename as psname, PC.targetname as cfsname, CR.targetname as rfsname from ? as PC join ? as CR on PC.targetname = CR.sourcename' , [ ps_cfs_nodes, cfs_rfs_nodes ]);



//var group = alasql('select rfsname from ? as M where psname= ?' , [ map, 'Integrated Messaging and Presence' ]);
var group = alasql('select rfsname from ? as M where psname= ?' , [ map, 'Call Center Agent Basic' ]);

group.forEach(function(e){
    console.log(e.rfsname)
})
