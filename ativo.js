import { INTEGER, STRING, DOUBLE } from "sequelize";
import sequelize from "./db.js";

const Ativo = sequelize.define(
	"ativo",
	{
		id: {
			type: INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		nome: {
			type: STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

export default Ativo;
