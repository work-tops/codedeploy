#!/bin/bash
# Start the Node.js app
cd /var/www/codebuild
pm2 --name codebuild start npm -- start
