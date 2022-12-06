FROM node:14.20-alpine As development

RUN  apk update && apk upgrade  && rm -rf node_modules \

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm ci && npm update && npm cache clean --force

COPY backend/. ./
   
CMD ["npm", "run", "test"] 
