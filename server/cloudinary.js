const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dsoptv5q2",
  api_key: "287429741559797",
  api_secret: "3sb0s0DY-7gHPaTt93bhnVLTaUY",
});
  
module.exports = cloudinary;
