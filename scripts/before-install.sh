#!/bin/bash
# Install Node.js and npm (if not already installed)
sudo apt update
pm2 stop codebuild
sudo rm -rf /var/www/codebuild/*
# sudo apt install -y nodejs npm


