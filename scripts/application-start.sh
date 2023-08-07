#!/bin/bash
# Start the Node.js app
cd /var/www/codedeploy
pm2 --name codedeploy start npm -- start
