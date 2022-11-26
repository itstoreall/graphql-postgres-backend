/* eslint-disable @typescript-eslint/no-explicit-any */
import DataType from 'sequelize';

export default (sequelize: any) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      name: { type: DataType.STRING, field: 'name' },
      balance: { type: DataType.FLOAT, field: 'balance' },
      active: { type: DataType.BOOLEAN, field: 'active' },
    },
    {
      tableName: 'user',
      timestamps: false,
    },
  );

  return User;
};
