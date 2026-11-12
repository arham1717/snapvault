# SnapVault

A serverless photo-sharing web app built for the Introduction to Cloud Computing final project (BCS 9A, Fall 2026, FAST-NU Lahore).

## Features (planned)

- Google sign-in with Amazon Cognito
- Cognito groups with a Post Confirmation Lambda trigger
- REST API (API Gateway + Lambda) and GraphQL API (AWS AppSync)
- Picture storage in Amazon S3
- CI/CD with AWS Amplify and GitHub
- Monitoring with Amazon CloudWatch

## CI pipeline

Every push and pull request runs these checks (GitHub Actions):

| Check                    | Tool      |
| ------------------------ | --------- |
| Linting                  | Oxlint    |
| Formatting               | Prettier  |
| Secret scanning          | Gitleaks  |
| Static analysis          | CodeQL    |
| Dependency vulnerability | npm audit |

## Run locally

    npm install
    npm run dev
