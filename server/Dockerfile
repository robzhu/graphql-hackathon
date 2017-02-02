FROM node:7-slim

# To build first run `npm run build`

ENV NODE_ENV production
EXPOSE 80

RUN mkdir /app
RUN mkdir /app/build
ADD build /app/build
ADD package.json /app
WORKDIR /app

RUN npm install --production

CMD npm start
