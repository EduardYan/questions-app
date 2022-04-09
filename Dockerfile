FROM nginx:1.21.6

MAINTAINER Daniel Yanes

# Copy the static files to nginx server
COPY . /usr/share/nginx/html