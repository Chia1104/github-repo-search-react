FROM node:16-alpine as react
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY /docker/nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react /app/build /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
