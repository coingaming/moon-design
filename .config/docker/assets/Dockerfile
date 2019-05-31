FROM nginx:alpine

RUN mkdir -p /config
ADD .config/nginx/nginx.conf.tmpl /config/nginx.conf.tmpl

COPY design/assets/static /usr/share/nginx/html
COPY .config/nginx/entrypoint.sh /usr/local/bin/

ENTRYPOINT ["entrypoint.sh"]
