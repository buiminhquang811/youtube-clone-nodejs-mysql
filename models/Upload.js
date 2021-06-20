module.exports = (sequelize, DataTypes) => {
  const Upload = sequelize.define("Upload", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        notEmpty: true,
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        notEmpty: true,
      }
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      }
    },
    thumbnailUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      }
    },
    videoPathname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      }
    },
  });
  return Upload;
}