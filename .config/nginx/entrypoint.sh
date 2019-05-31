#!/bin/sh
export NAMESERVERS=$(cat /etc/resolv.conf | grep "nameserver" | awk '{print $2}' | tr '\n' ' ')
envsubst '$NAMESERVERS' < /config/nginx.conf.tmpl > /etc/nginx/nginx.conf

exec nginx -g "daemon off;"
