Getting started with development:
1. [Local](#developing-locally)
2. [Codespaces](#developing-in-github-codespaces)
3. [Running the web app](#running-the-application)

## Developing Locally

This repository is set up as a [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers). It includes some custom setup for my own infrastructure that is commented out.

See `.devcontainer/docker-compose.yml` to enable Traefik routing. 

Upon cloning the repository, copy `.env-local.example` to `server/.env` and customize as needed.  

## Developing in Github Codespaces

Upon cloning the repository, copy '.env.example' to 'server/.env', this is configured to use the CODESPACE_NAME rather than a local host.

## Running the application:

There are VSCode Tasks set up to launch the client and server together. CTRL + SHIFT + P and then look for Run Tasks and choose Watch All.

## Updating the seed file:

If any changes are made to the seed file found in "server > seeds > initial_data.js", you will need to re-seed the Knex Db through the following steps:
1. cd server
2. knex seed:run  

If 'knex' is an unknown command, simply install it globally through the node command 'npm install knex -g' and re-do Step 2.
