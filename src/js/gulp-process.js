var through = require('through2');

var util = require('gulp-util');

var path = require('path');

var fs = require('fs');

var Promise = require("bluebird");

var rename = Promise.promisify(fs.rename);

var debug = require('debug')('processor');

module.exports = function(targetdir) {

  var transform = function(file, encoding, callback) {
    debug("Processing " + file.path);

    var dir = path.dirname(file.path);

    debug("Dir " + dir);
    debug("File Event " + file.event);
    try {
      if(file.event!='unlink'){
        debug("Moving from "+ dir +" to " + targetdir);
        var basename = path.basename(file.path);
        var targetpath = path.join(targetdir,basename);
        rename(file.path,targetpath )
          .then(function(){
              debug("Moved from "+ file.path +" to " + targetpath);
              callback();
            })
          .catch(e => console.error(e));
      }else {
        debug("Skipping");
        callback();
      }
    }catch(e){
      console.log(e);
    }
  };

  return through.obj(transform);
};
