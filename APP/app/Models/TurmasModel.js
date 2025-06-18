import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {
    return sequelize.define(
        "Turmas",
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
            faixa_etaria: {
                type: DataTypes.STRING(100),
                allowNull: false
            }
        },
        {
            tableName: "turmas",
            timestamps: false
        }
    );
})();
