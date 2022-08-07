FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force --loglevel=error

EXPOSE 8080

# Make sure application is responding
HEALTHCHECK --interval=60s --timeout=5s --start-period=5s CMD curl --fail http://localhost:8080/api/status || exit 1

CMD [ "node","script.js" ]