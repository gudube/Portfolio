https://www.guilhemdubois.com
https://guilhemdubois.com
http://www.guilhemdubois.com
http://guilhemdubois.com

# GuilhemDuboisPortfolio
Repository for my personal website.

## Deploy
1. npm run deploy (ng build --prod)
1. in gh-pages, delete all files except CNAME and delete the assets folder ONLY.
1. copy folders from dist to portfolio-deploy/Portfolio
1. copy index.html to 404.html
1. Commit and push gh-pages

(old way: ng add angular-cli-ghpages)
## Routing:
When adding a new route:
1. add it in app-routing.module.ts
1. add it in sitemap.xml
2. add folder in portfolio-deploy/Portfolio
1. add symlink index.html in the created folder (or see github for format), or just point to the real index.html (../../index.html)

## Test on another device
ng serve --host 10.0.0.17 --disableHostCheck