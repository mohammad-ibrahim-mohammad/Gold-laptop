# Gold Laptop

A full-stack laptop e-commerce web application: a React storefront backed by an Express REST API and a PostgreSQL database, with all data access written in plain SQL (no ORM).

> **Status: work in progress.** The core catalog, database schema and storefront UI are in place. Authentication, orders and some API routes are still being built. See the [Roadmap](#roadmap).

## Tech Stack

**Frontend**
- React 19 and Vite
- React Router v7
- TanStack React Query (server state)
- Redux Toolkit (shopping cart)
- Tailwind CSS v4 and shadcn/ui
- React Hook Form

**Backend**
- Node.js and Express 5
- PostgreSQL with the `pg` driver (raw SQL, parameterized queries)
- `node-pg-migrate` for versioned schema migrations
- Repository pattern: routes → controllers → repositories → database

## Features

**Working now**
- Product catalog with product details pages (description and reviews tabs)
- Browse products by category
- Shopping cart with add, remove and quantity controls (Redux Toolkit)
- Favorites UI
- Login, signup, forgot-password and reset-password pages (UI)
- REST API with full CRUD for products, categories, tags and users
- Relational schema with foreign keys, unique constraints and check constraints

**In progress**: see the [Roadmap](#roadmap).

## Database Schema

Managed through migrations in `Backend/migrations/`:

| Table | Purpose |
| --- | --- |
| `users` | Accounts (name, email, phone, avatar, password reset fields) |
| `categories` | Product categories, with optional parent category |
| `product_statuses` | Product status lookup |
| `products` | Catalog items (SKU, prices, stock quantity, status, category) |
| `tags` | Product tags |
| `product_tags` | Many-to-many: products ↔ tags |
| `product_categories` | Many-to-many: products ↔ categories |
| `reviews` | One review per user per product, rating 1–5 |
| `favorites` | A user's favorite products |

## Project Structure

```
Gold Laptop/
├── Backend/
│   ├── migrations/          # node-pg-migrate schema migrations
│   └── src/
│       ├── controllers/     # request handlers
│       ├── repositories/    # SQL queries, one repo per table
│       ├── routes/          # Express routers
│       ├── db/pool.js       # PostgreSQL connection pool
│       ├── utils/           # async handler, helpers
│       ├── app.js           # Express app setup
│       └── server.js        # entry point
└── Frontend/
    └── src/
        ├── features/        # Products, Categories, Cart, Favorites, Reviews, Auth
        ├── pages/           # route-level pages
        ├── services/        # API calls
        ├── store/           # Redux store
        ├── ui/              # shared UI components
        └── components/ui/   # shadcn/ui components
```

## API Endpoints

| Resource | Endpoints |
| --- | --- |
| Products | `GET /products`, `GET /products/:productId`, `POST /products`, `PUT /products/:productId`, `DELETE /products/:productId` |
| Categories | `GET /categories`, `GET /categories/:categoryId`, `POST /categories`, `PUT /categories/:categoryId`, `DELETE /categories/:categoryId` |
| Tags | `GET /tags`, `GET /tags/:tagId`, `POST /tags`, `PUT /tags/:tagId`, `DELETE /tags/:tagId` |
| Users | `GET /users`, `GET /users/:userId`, `POST /users`, `PUT /users/:userId`, `DELETE /users/:userId` |

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "Gold Laptop"
```

### 2. Set up the backend

```bash
cd Backend
npm install
```

Create a PostgreSQL database, then create a `config.env` file in `Backend/`:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=your_database_name
DATABASE_USER=your_database_user
DATABASE_PASSWORD=your_database_password
PORT=2000
```

Run the migrations (`node-pg-migrate` reads `DATABASE_URL`):

```bash
DATABASE_URL=postgres://your_database_user:your_database_password@localhost:5432/your_database_name npm run migrate up
```

Start the API:

```bash
npm run dev
```

### 3. Set up the frontend

```bash
cd ../Frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173` and expects the API at `http://localhost:2000` (see `Frontend/src/helpers/constants.js`).

## Roadmap

- [ ] Authentication: signup, login, password hashing and JWT-based sessions
- [ ] Password reset flow
- [ ] Routes for reviews and favorites (repositories are already written)
- [ ] Orders and checkout
- [ ] Product image uploads
- [ ] Transactional emails
- [ ] Input validation and route protection
- [ ] Brands

## Author

**Mohammad Ibrahim Mohammad**: Full-Stack Developer, Damascus, Syria
[GitHub](https://github.com/mohammad-ibrahim-mohammad) · [LinkedIn](https://www.linkedin.com/in/mohammad-ibrahim-mohammad)