import { INTEGER, STRING, DOUBLE, DATEONLY, FLOAT } from "sequelize";
import sequelize from "./db.js";

const Historico = sequelize.define(
	"historico",
	{
		id: {
			type: INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		Date: {
			type: DATEONLY,
			unique: "uniqueOccurrence",
			allowNull: false,
		},
		Value: {
			type: FLOAT,
		},
		idAtivo: {
			type: INTEGER,
			allowNull: false,
			unique: "uniqueOccurrence",
		},
	},
	{
		timestamps: false,
	}
);

export default Historico;
