https://www.guilhemdubois.com
https://guilhemdubois.com
http://www.guilhemdubois.com
http://guilhemdubois.com

# GuilhemDuboisPortfolio
Repository for my personal website.

## Deploy
ng add angular-cli-ghpages
ng deploy --cname="www.guilhemdubois.com"
<!--ng deploy --base-href=/Portfolio/-->

## Test on another device
ng serve --host 10.0.0.17 --disableHostCheck
where 10.0.0.17 is the local ip from Wifi settings -> Hardware properties (or ipconfig)

## TODOS
Under this format:
`//TODO [3]: add localization fr/en`
where `[x]` is the priority. 1 being the biggest priority

## Images
### Adding images (photography section):
Add an entry to photos.json
Add the picture called ...-menu.jpg
Add small pictures under .../squares/....jpg
Add full size pictures WITH THE SAME NAME under .../hd/....jpg
Add all the picture names in the json array

### Menu Items

16:9 for phones
Menu item is 30%vh
Let's do images around 4:11
width: 2048

### Squares
short edge: 300


### SD
max width: 600
max height: 900
cause squares are 300 pixels but we use the same ones for the sd images
so 600 sounds good
should I do squares with 300 pixels?

### HD
max width: 2048
