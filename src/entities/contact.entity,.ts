import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 130 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 20 })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}
