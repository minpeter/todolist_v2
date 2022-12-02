FROM node:16 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV REACT_APP_BASEURL="http://localhost:8080"

RUN yarn run build


FROM nginx

WORKDIR /app
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
