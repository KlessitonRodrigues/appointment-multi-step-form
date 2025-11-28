## 🌐 Accordous Page

#### Available on: https://d2br88sd9e2try.cloudfront.net

#### 📌 Test Account

- Email: test@testemail.com
- Password: Test12345

#### 🎨 Design Source

- Figma: https://www.figma.com/design/v5GTsk0KYMrXsWE7iQvjpE/accordous-web

#### 🔨 Frameworks

- ReactJS
- Styled Components
- ViteJS

#### 🚀 Start Application

- run "yarn" and "yarn dev"

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
  cd ./deploy
  yarn cdk:deploy
  ```

# 📡 Accordous API

#### Available on: https://2so6wtdcja.execute-api.us-east-1.amazonaws.com/prod/

#### 🔨 Frameworks

- AWS CDK library
- MongoDB
- Docker
- BcryptJS
- JsonWebToken

#### 📪 Endpoints

- Import the file "insomnia.json" into insomnia app to see each endpoint

#### 🔒 Environment Configuration

- .env

  ```
    MONGODB=mongodb://mongo:27017/acadenutri
    SECRET_KEY=
    TOKEN_KEY=
  ```

#### 🚀 Start Application

> Local

- change ".env" file to use the local database uri
- run "docker-compose up"

#### 📦 Deploy Application

- Add AWS keys

  ```
  export AWS_ACCESS_KEY_ID=
  export AWS_SECRET_ACCESS_KEY=
  export AWS_DEFAULT_REGION=us-east-1
  ```

- Deploy

  ```
  yarn cdk:deploy
  ```
