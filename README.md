pm2 start npm --name "quantumxio" -- start

pm2 startup

sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

sudo ufw allow 80

sudo /sbin/iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT

sudo nano /etc/nginx/sites-available/quantumxio

sudo ln -s /etc/nginx/sites-available/quantumxio /etc/nginx/sites-enabled/


server {
    listen 80;
    avlestech-ubuntu 20.219.21.110;

    location / {
        proxy_pass http://localhost:3000; # Replace with your app's port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


