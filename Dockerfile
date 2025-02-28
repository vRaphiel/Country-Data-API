FROM node:16-alpine

WORKDIR /app
COPY . /app

ENV LOCAL_HOST=${LOCAL_HOST}
ENV LOCAL_PORT=${LOCAL_PORT}
ENV LOCAL_DATABASE=${LOCAL_DATABASE}
ENV LOCAL_USER=${LOCAL_USER}
ENV LOCAL_PASSWORD=${LOCAL_PASSWORD}
ENV LOCAL_DIALECT=${LOCAL_DIALECT}

EXPOSE ${PORT}
RUN npm install

CMD ["node", "App.js"]