FROM node:18.12.1-alpine3.16

# Set app directory
WORKDIR /usr/src/app

# Copy package & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm i -g json-server

# Copy app source
COPY . .

ENTRYPOINT ["json-server", "--port", "3001", "--host", "0.0.0.0"]
CMD ["index.js"]