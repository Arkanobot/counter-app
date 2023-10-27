FROM node:20
WORKDIR /backend
COPY package*.json /backend
RUN npm install
COPY . /backend
ARG MONGODB_URL= "mongodb://localhost:27017/counters"
ARG PORT= 5000
EXPOSE 5000
CMD ["npm", "start"]
