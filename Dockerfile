FROM node:20.9.0-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install json-server
COPY . /app

EXPOSE 3000 4000

RUN json-server | echo 

# Run the application.
CMD npm run dev