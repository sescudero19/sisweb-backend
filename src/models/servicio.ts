import { Table, Model, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface ServicioAttributes {
    id_servicio: number;
    nombre_servicio: string;
}

interface ServicioCreationAttributes extends Optional<ServicioAttributes, 'id_servicio'> {}

@Table({
    tableName: "servicios"
})
export class Servicio extends Model<ServicioAttributes, ServicioCreationAttributes> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_servicio!: number;

    @Column({
        type: DataType.STRING(150)
    })
    nombre_servicio!: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}