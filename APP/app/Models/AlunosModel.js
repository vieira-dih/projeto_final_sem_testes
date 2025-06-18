import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {
    return sequelize.define(
        "Alunos",
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
            data_nascimento: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            responsavel_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'responsaveis',
                    key: 'id'
                }
            },
            turma_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'turmas',
                    key: 'id'
                }
            }
        },
        {
            tableName: "alunos",
            timestamps: false
        }
    );
})();
