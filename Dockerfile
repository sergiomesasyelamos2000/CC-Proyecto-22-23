FROM node:12.22-alpine3.14
LABEL version="0.1.0" maintainer="sergiomesasyelamos@gmail.com" nodeversion=$VER

#Update container and grant permission to new user
RUN  apk update && apk upgrade  && rm -rf node_modules \
    && mkdir -p /app  \
    && mkdir -p /app/test \
    && mkdir -p /app/coverage \
    && mkdir -p /app/test/coverage \
    && mkdir -p /app/test/src \
    && mkdir -p /app/node_modules \
    && mkdir -p /app/test/logs \
    && mkdir -p /app/test/src/logger 
   
   

#Set path to node modules
ENV PATH="/app/node_modules/.bin:${PATH}"

RUN npm config set unsafe-perm true

    
#Change user not root 

RUN chown -R root:root /app && chmod -R  777 /app

WORKDIR /app

COPY backend/package*.json  ./
RUN npm install \
    && npm cache clean --force

WORKDIR /app/test

   
CMD ["npm", "run", "test"] 
