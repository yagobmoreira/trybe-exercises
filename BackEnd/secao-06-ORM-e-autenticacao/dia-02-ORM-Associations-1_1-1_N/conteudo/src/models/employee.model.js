const EmployeeModel = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      field: "first_name"
    },
    lastName: {
      type: DataTypes.STRING,
      field: "last_name"
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: 'employees',
    underscore: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address, 
      { foreignKey: 'employeeId', as: 'addresses'});
  };

  return Employee;
}

module.exports = EmployeeModel;