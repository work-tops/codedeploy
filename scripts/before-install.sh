#!/bin/bash
# Install Node.js and npm (if not already installed)
sudo apt update
pm2 stop codebuild
sudo npm install -g pm2
sudo rm -rf /var/www/codebuild/*
# sudo apt install -y nodejs npm


