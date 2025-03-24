import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'modules/users/entities/user.entity';
import 'dotenv/config';

// Criar conexão manualmente
const dataSource = new DataSource({
  type: 'postgres', // ou mysql, sqlite, etc.
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: Number(process.env.DATABASE_PORT ?? 5432),
  username: process.env.DATABASE_USER ?? 'postgres',
  password: process.env.DATABASE_PASSWORD ?? 'postgres',
  database: process.env.DATABASE_NAME ?? 'mydb',
  entities: [User],
});
async function seed() {
  await dataSource.initialize(); // Inicializa a conexão com o banco

  const userRepository = dataSource.getRepository(User);

  // Criar usuário admin
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const adminUser = userRepository.create({
    name: 'Admin',
    email: 'admin@example.com',
    password: hashedPassword,
  });

  await userRepository.save(adminUser);
  console.log('Usuário de exemplo criado!');

  await dataSource.destroy(); // Fecha a conexão após a execução
}

seed().catch((err) => console.error(err));
