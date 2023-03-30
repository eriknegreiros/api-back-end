import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Contacts } from "./contact.entity,";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 130 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column({ length: 20 })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contacts, (contacts) => contacts.user, {
    cascade: true,
  })
  contacts: Contacts[];
}
