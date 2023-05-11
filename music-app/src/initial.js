var Migrations = artifacts.require("migration");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

