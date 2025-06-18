import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {
    return sequelize.define(
        "Responsaveis",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: "responsaveis",
            timestamps: false
        }
    );
})();
