# # Use an existing image as base 
# FROM alpine
# # Download and install the dependency
# RUN apk add --update redis

# RUN apk add --update gcc
# # Tell the image what to do when it starts as a container
# CMD ["redis-server"]