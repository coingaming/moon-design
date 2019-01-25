#!/bin/sh
export NAMESERVERS=$(cat /etc/resolv.conf | grep "nameserver" | awk '{print $2}' | tr '\n' ' ')

envsubst '$NAMESERVERS' < /config/nginx.conf.tmpl > /etc/nginx/nginx.conf

# Replace enviromental variables in the index template
cat /etc/nginx/nginx.conf
cat /usr/share/nginx/html/index.html

exec nginx -g "daemon off;"
