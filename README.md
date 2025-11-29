# Coresec

## Project Description

Coresec is a web application that allows users to create and manage their own security policies. The application provides a user-friendly interface for defining security rules, such as firewall rules, intrusion detection rules, and security policies. It also allows users to view and manage their security policies, including the ability to view and edit the rules defined in the policies.

## Project Setup

### Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js 24.x
- pnpm (pnpm is a faster alternative to npm)

### Installation

1. Clone the repository:

```bash
git clone repo-url
```

2. Navigate to the project directory:

```bash
cd coresec
```

3. Install the project dependencies:

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm dev
```

5. Open your browser and navigate to `http://localhost:3000`.

## License

This project is licensed under the MIT License.

## Production Build

```bash
npm ci          #clean install from lockfile => Installs exact versions from package-lock.json
npm run build
cd out
zip -r ../site.zip . \
  -x '*.map' '*.br' '*.gz' '*precache*' 'sw.js' 'workbox-*'
```

```bash
eJPT Certification

```
