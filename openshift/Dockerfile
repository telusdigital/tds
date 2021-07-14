# The Dockerfile is the description of all the commands to run to assemble the image.
# Read about all the commands here: https://docs.docker.com/engine/reference/builder/

# We also have a docker-compose.yml file, which is used to build and run this Docker image.


# Start from the official Node 6 alpine image. https://hub.docker.com/_/node/
FROM node:16

# Disable update check
ENV NO_UPDATE_NOTIFIER=true

# Set the working directory for following commands.
ENV HOME=/app
WORKDIR /app

# Add a user so that we don't run as root:
#  https://github.com/telusdigital/reference-architecture/blob/3ff683dd68b247ac9a3febda828105fe52cd9390/delivery/docker.md#root-vs-user-mode
RUN set -ex && \
  adduser node root && \
  chmod g+w /app

# Copy only the files necessary to install dependencies into the working directory.
# Docker builds the image in layers and caches them. Because the app files change more often than the dependencies, we
#  copy the app files only after we install the depencendies.
COPY .npmrc package.json package-lock.json lerna.json ./

# Install git, which is necessary for the install process.
RUN apt-get update && \
  apt-get install git

# Install dependencies.
# `npm run gitbook:install` will happen in the "prepare" hook, right after `npm ci`
RUN set -ex && \
npm ci

# Copy all source and test files into the working directory.
# We use a .dockerignore file to prevent unnecessary or large files from being inadvertently copied.
COPY . /app

# Build the app.
RUN npm run gitbook:install && \
  npx lerna bootstrap --hoist && \
  npm run build -- --all && \
  ./scripts/ci-build-docs.sh \
  rm .npmrc

# Set the container's user to the newly created one.
USER node

# The entrypoint configures the container to be run as an executable.
# Arguments supplied on the command line will be forwarded onto the entrypoint.
ENTRYPOINT ["npm", "run"]
