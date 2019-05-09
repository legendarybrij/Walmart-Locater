module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    passcode: DataTypes.STRING
  });
  return User;
};
