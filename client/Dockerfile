FROM node:16.18.1-alpine3.16

# Set app directory
WORKDIR /usr/src/app

# Copy package & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

CMD npm run dev