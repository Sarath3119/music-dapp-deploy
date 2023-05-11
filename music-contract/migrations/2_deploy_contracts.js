var Auction = artifacts.require("MusicAlbums");


module.exports = function(deployer) {
  deployer.deploy(Auction,1);
};


