https://www.guilhemdubois.com
https://guilhemdubois.com
http://www.guilhemdubois.com
http://guilhemdubois.com

# GuilhemDuboisPortfolio
Repository for my personal website.

## Deploy
ng add angular-cli-ghpages

1. ng build --prod
1. delete all files and ASSETS folder from portfolio-deploy/Portfolio
1. copy folders from dist to portfolio-deploy/Portfolio EXCEPT index.html
IF CHANGED index.html:
1. copy index.html to 404.html
1. (re)create symlink to index.html in each folder?

## Routing:
When adding a new route:
1. add it in app-routing.module.ts
1. add it in sitemap.xml
2. add it in portfolio-deploy/Portfolio
1. add symlink index.html in the created folder

## Test on another device
ng serve --host 10.0.0.17 --disableHostCheck

## Images
### Adding images (photography section):

### Menu Items
Let's do images around 4:11
width: 1920

### SD
dimensions: 1280x720

### HD
dimensions: 1920x1080
