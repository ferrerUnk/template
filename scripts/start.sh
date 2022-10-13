#!/bin/bash
#cd /var/www/crewhub-frontend/ || true
#npm run build || true
cd /var/www/html || true
rm -rf *.* assets static/ || true
cp -r /var/www/crewhub-frontend/build/* /var/www/html/ || true

