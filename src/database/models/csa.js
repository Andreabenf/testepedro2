import { DataTypes, Model } from "sequelize";

export default function (sequelize) {
  class Csa extends Model {
    static associate(models) {}
  }

  Csa.init(
    {
      nameCSA: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      urlBase: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
    },
    {
      modelName: "csas",
      sequelize,
    }
  );

  return Csa;
}
