import db from "./index"
import {
  AttributeCategory,
  Banned,
  Currency,
  ProductCategory,
  ProductSet,
  Role,
  User,
  Attribute,
  Product,
  Order,
  Voucher,
  VoucherHistory,
} from "@prisma/client"
import { SecurePassword } from "@blitzjs/auth"
import { faker } from "@faker-js/faker"

// Settings
const userCount = 10
const bannedCount = 100
const currencyCount = 20
const attributeCategoryCount = 10
const attributeCount = 20
const categoryCount = 15
const setCount = 15
const productCount = 1000
const voucherCount = 20
const voucherHistoryCount = 60
const orderCount = 2000

async function seedUsers() {
  console.info("Seeding users...")

  const data: Pick<User, "email" | "hashedPassword" | "role">[] = [
    {
      email: `test@test.com`,
      hashedPassword: await SecurePassword.hash("test"),
      role: Role.ADMIN,
    },
  ]
  for (let i = 0; i < userCount; i++)
    data.push({
      email: `test${Math.random()}@test.com`,
      hashedPassword: await SecurePassword.hash(`test${i}`),
      role: Role.USER,
    })
  await db.user.createMany({ data })
}

async function seedMisc() {
  console.info("Seeding misc...")

  // Banned
  const bannedData: Pick<Banned, "ip">[] = []
  for (let i = 0; i < bannedCount; i++) bannedData.push({ ip: faker.internet.ip() })
  await db.banned.createMany({ data: bannedData })

  // Currencies
  const currenciesData: Pick<Currency, "name" | "rate" | "primary">[] = [
    { name: faker.finance.currencyName(), rate: 1, primary: true },
  ]
  for (let i = 0; i < currencyCount; i++)
    currenciesData.push({ name: faker.finance.currencyName(), rate: Math.random(), primary: false })
  await db.currency.createMany({ data: currenciesData })
}

async function seedProducts() {
  console.info("Seeding products...")

  // Categories
  const categoriesData: Pick<ProductCategory, "name" | "index">[] = []
  for (let i = 0; i < categoryCount; i++)
    categoriesData.push({ name: faker.music.genre(), index: i })
  await db.productCategory.createMany({ data: categoriesData })

  // Sets
  const setsData: Pick<ProductSet, "name" | "index">[] = []
  for (let i = 0; i < setCount; i++) setsData.push({ name: faker.color.human(), index: i })
  await db.productSet.createMany({ data: setsData })

  // Attribute categories
  const attributeCategoriesData: Pick<AttributeCategory, "name" | "index">[] = []
  for (let i = 0; i < attributeCategoryCount; i++)
    attributeCategoriesData.push({ name: faker.word.noun(), index: i })
  await db.attributeCategory.createMany({ data: attributeCategoriesData })

  // Attributes
  const attributesData: Pick<Attribute, "name" | "categoryId">[] = []
  for (let i = 0; i < attributeCount; i++)
    attributesData.push({ name: faker.word.adjective(), categoryId: 1 })
  await db.attribute.createMany({ data: attributesData })

  // Products
  const productsData: (Pick<Product, "name" | "isbn" | "thumbnailKey" | "categoryId" | "setId"> & {
    attributeIds: number[]
  })[] = []
  for (let i = 0; i < productCount; i++) {
    productsData.push({
      name: faker.name.firstName(),
      isbn: i.toString(),
      thumbnailKey: "",
      categoryId: 1,
      setId: 1,
      attributeIds: [],
    })
  }
  const data = productsData.map(({ attributeIds, ...rest }) => rest)
  await db.product.createMany({ data })
}

async function seedOrders() {
  console.info("Seeding orders...")

  const orderData: (Pick<Order, "firstName" | "lastName" | "customerId" | "currencyId"> & {
    productIds: string[]
  })[] = []
  for (let i = 0; i < orderCount; i++) {
    orderData.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      customerId: 1,
      currencyId: 1,
      productIds: [],
    })
  }
  const data = orderData.map(({ productIds, ...rest }) => rest)
  await db.order.createMany({ data })
}

async function seedVouchers() {
  console.info("Seeding vouchers...")

  // Vouchers
  const vouchersData: (Pick<Voucher, "name" | "active"> & {
    categoryIds: string[]
    setIds: string[]
    productIds: string[]
  })[] = []
  for (let i = 0; i < voucherCount; i++) {
    vouchersData.push({
      name: faker.name.firstName(),
      active: false,
      categoryIds: [],
      setIds: [],
      productIds: [],
    })
  }
  const data = vouchersData.map(({ categoryIds, productIds, setIds, ...rest }) => rest)
  await db.voucher.createMany({ data })

  // Voucher histories
  const voucherHistoriesData: Pick<VoucherHistory, "orderId" | "voucherId">[] = []
  for (let i = 0; i < voucherHistoryCount; i++) {
    voucherHistoriesData.push({
      voucherId: 1,
      orderId: i + 1,
    })
  }
  await db.voucherHistory.createMany({ data: voucherHistoriesData })
}

async function seed() {
  await seedUsers()
  await seedMisc()
  await seedProducts()
  await seedOrders()
  await seedVouchers()
}

export default seed
