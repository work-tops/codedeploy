#!/bin/bash

# Update the package list and upgrade existing packages
sudo apt update
sudo apt upgrade -y
sudo apt install wget

# Install Nginx
sudo apt install -y nginx

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Start Nginx
sudo systemctl start nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx

sudo nginx -s reload
