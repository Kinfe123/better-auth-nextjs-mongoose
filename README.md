# Better Auth Starter with Next.js and MongoDB

A complete authentication solution using Better Auth, Next.js, and Prisma.

## Features

- 🔐 Complete authentication system
- 📧 Email/Password authentication
- 🔑 Social authentication (Google, GitHub, etc.)
- 🎯 Type-safe with TypeScript
- 🚀 Server Actions support
- 📱 Responsive design
- 🔄 Session management
- 🛡️ CSRF protection

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- MongoDB database

## Installation

1. **Clone the project**

```bash
git clone https://github.com/Kinfe123/better-auth-nextjs-mongoose
cd better-auth-nextjs-mongoose
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Setup Env variables**

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
DATABASE_URL="mongodb://...."
AUTH_SECRET="your-auth-secret" # Generate with: openssl rand -base64 32
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
TWITTER_CLIENT_ID="your-twitter-client-id"
TWITTER_CLIENT_SECRET="your-twitter-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

5. **Run database migrations**

For MongoDB, we don't need to generate or migrate the schema.

6. **Run dev server**

```bash
pnpm dev
```

## Troubleshooting

Common issues and solutions:

1. **Database Connection Issues**

   - Verify your DATABASE_URL in .env
   - Ensure PostgreSQL is running
   - Check database permissions

2. **Authentication Errors**

   - Verify AUTH_SECRET is set
   - Check social provider credentials
   - Ensure proper CORS configuration

3. **Session Issues**
   - Check cookie settings
   - Verify nextCookies plugin is enabled
   - Ensure proper redirect handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
