import { PrismaClient } from "@prisma/client"

function getDbName() {
  const split = process.env.DATABASE_URL?.split("/") ?? ""
  return split[split.length - 1]?.split("?")[0]
}

async function getTables(prisma: PrismaClient): Promise<string[]> {
  const results: { TABLE_NAME: string }[] = await prisma.$queryRaw`
        SELECT table_name FROM information_schema.tables
        WHERE table_schema = ${getDbName()};`
  return results.map((v) => v.TABLE_NAME)
}

async function dropTables(prisma: PrismaClient, tables: string[]): Promise<void> {
  await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 0;`)
  for (const table of tables) await prisma.$executeRawUnsafe(`DROP TABLE \`${table}\`;`)
  await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 1;`)
}

async function clean() {
  //console.info("Clearing file bucket")
  //await clearBucket()
  console.info("Dropping all tables in the database...")
  const prisma = new PrismaClient()
  const tables = await getTables(prisma)
  await dropTables(prisma, tables)
  console.info("Cleaned database successfully")
  await prisma.$disconnect()
}

export default clean()
