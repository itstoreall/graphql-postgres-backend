/* eslint-disable @typescript-eslint/no-explicit-any */
import DataType from 'sequelize';

export default (sequelize: any) => {
  const Session = sequelize.define(
    'Session',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      sessionId: { type: DataType.INTEGER, field: 'sessionId', unique: true },
      actions: {
        type: DataType.ARRAY(DataType.INTEGER),
        field: 'actions',
      },
      date: { type: DataType.DATE, field: 'date' },
    },
    {
      tableName: 'session',
      timestamps: false,
    },
  );

  return Session;
};
