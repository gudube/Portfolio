https://www.guilhemdubois.com
https://guilhemdubois.com
http://www.guilhemdubois.com
http://guilhemdubois.com

# GuilhemDuboisPortfolio
Repository for my personal website.

## Adding pictures
1. Add header (jpg + mp4), menu (jpg + webp) and sd, hd, udh pics.
1. Use in powershell to get file names: ((dir).name) -join "', '"
1. Add page and file names in app-routing.module.ts
1. Add titles in en.json and fr.json (can use BabelEdit)
1. See next two sections

(old way: ng add angular-cli-ghpages)
## Routing:
When adding a new route:
1. add it in app-routing.module.ts
1. add it in sitemap.xml
2. add folder in portfolio-deploy/Portfolio
1. add symlink index.html in the created folder (or see github for format), or just point to the real index.html (../../index.html)

## Deploy
1. npm run deploy (ng build --prod)
1. in gh-pages, delete all files except CNAME and 404.html and delete the assets folder ONLY.
1. copy everything from dist to portfolio-deploy/Portfolio
1. Commit and push gh-pages

## Test on another device
get ip from 'ipconfig'
ng serve --host {ip} --disable-host-check