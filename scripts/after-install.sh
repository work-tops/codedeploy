#!/bin/bash
# Clone the GitHub repository and place it in /dist/
cd /dist
git clone https://github.com/manojdesen1/codebuild.git .

# Install Node.js app dependencies
cd /var/www/codebuild
npm install
