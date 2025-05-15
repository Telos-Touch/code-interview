# TelosTouch Code Interview

> "A wizard arrives precisely when he means to. Welcome, O seeker of wisdom, to the TelosTouch Code Interview! May your journey through this monorepo be guided by clarity, courage, and a touch of magic. The path may twist and turn, but remember: even the smallest line of code can change the course of the future. Good luck, and may your debugging be swift!"

This project is a monorepo containing both a **NestJS backend** and a **Next.js frontend**. It uses [pnpm](https://pnpm.io/) for package management and [Turborepo](https://turbo.build/) for monorepo orchestration.

## Project Structure

- `apps/backend` — NestJS API server
- `apps/frontend` — Next.js web application

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (v8 or higher)

## Setup Instructions

1. **Install dependencies** (from the root directory):

    ```sh
    pnpm install
    ```

2. **Run the project**:

    ```sh
    pnpm dev
    ```

## Notes

- Make sure ports 3000 (frontend) and 3001 (backend) are available.
- You can customize ports in the respective app configs if needed.

---

For more details, see the `README.md` files in each app directory.
