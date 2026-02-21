FROM nginx:1.29.0-alpine
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY docs/.vitepress/dist /usr/share/nginx/html
