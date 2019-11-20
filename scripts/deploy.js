const ghpages = require('gh-pages')
const path = require('path');
ghpages.publish(path.resolve(__dirname,'../dist'),{
    branch:"gh-pages",
    repo:"https://github.com/zsh2401/sz-rat.git"
});
