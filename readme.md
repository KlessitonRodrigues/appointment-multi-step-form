## 🌐 Appointment Multi Step Form

#### Available on: https://d2fvz3twxtlqif.cloudfront.net

#### 🔨 Frameworks

- NextJS
- ReactJS
- TailwindCSS
- React Query
- Zustand
- React Hook Form
- Zod

#### 🚀 Start Application

- run "yarn" and "yarn dev"

#### 🛠️ Test Application

- Run local tests

  ```
  cd ./_selenium
  yarn test-dev
  ```

- Run production tests
  ```
  cd ./_selenium
  yarn test-prod
  ```

#### 📦 Deploy Application

- Generate website assets

  ```
  yarn build
  ```

- Add AWS keys

  ```
  export AWS_ACCESS_KEY_ID=
  export AWS_SECRET_ACCESS_KEY=
  export AWS_DEFAULT_REGION=us-east-1
  ```

- Deploy

  ```
  cd ./_aws
  yarn cdk-deploy
  ```
