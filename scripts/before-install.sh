#!/bin/bash
# Install Node.js and npm (if not already installed)
sudo apt update
sudo systemctl restart nginx
pm2 stop codedeploy
sudo rm -rf /var/www/codedeploy/*
# sudo apt install -y nodejs npm


