const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn()
    id: any;

    @Column({ type: "varchar", length: 255 })
    name: any;

    @Column({ type: "varchar", length: 14, unique: true })
    cpfCnpj: any;

    @Column({ type: "varchar", length: 255, unique: true })
    email: any;

    @Column({ type: "varchar", length: 15 })
    phone: any;

    @Column({ type: "varchar", length: 255 })
    address: any;
}

module.exports = Client;
