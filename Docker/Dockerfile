FROM node:16

# Create app directory
RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install && npm cache clean --force --loglevel=error

EXPOSE 8080

# Make sure application is responding
HEALTHCHECK --interval=60s --timeout=5s --start-period=5s CMD curl --fail http://localhost:8080/api/status || exit 1

CMD [ "node","script.js" ]