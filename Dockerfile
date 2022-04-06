FROM nginx

MAINTAINER Daniel Yanes

# Copy the static files to nginx server
COPY . /usr/share/nginx/html