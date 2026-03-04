# Automation Testing Project

This is a Playwright-based automation testing project with a well-organized folder structure for maintainability and scalability.

## Project Structure

```
├── pages/              # Page Object Models
├── tests/              # Test files (.spec.js)
├── test-data/          # Test data files (JSON, etc.)
├── utils/              # Utility functions and helpers
├── playwright.config.ts # Playwright configuration
├── package.json        # Project dependencies
├── .env                # Environment variables
└── README.md           # This file
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Update `.env` file with your environment variables:
   ```
   BASE_URL=your_application_url
   USERNAME=your_test_username
   PASSWORD=your_test_password
   ```

## Running Tests

- Run all tests:
  ```bash
  npm test
  ```

- Run tests with UI:
  ```bash
  npm run test:ui
  ```

- Run tests in headed mode:
  ```bash
  npm run test:headed
  ```

- Debug tests:
  ```bash
  npm run test:debug
  ```

- Generate test code:
  ```bash
  npm run codegen
  ```

## Best Practices

- Use Page Object Models (POM) in `pages/` folder
- Keep test data in `test-data/` folder
- Use utility functions from `utils/` folder
- Follow naming conventions for test files (`*.spec.ts`)
- Keep tests focused and independent

## License

ISC
