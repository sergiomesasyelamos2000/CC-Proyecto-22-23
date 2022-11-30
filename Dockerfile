FROM node:14.20-alpine As development

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install && npm update && npm cache clean --force

COPY backend/. ./

#RUN npm run build

   
CMD ["npm", "run", "test"] 
