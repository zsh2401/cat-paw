const ghpages = require('gh-pages')
const path = require('path');
ghpages.publish(path.resolve(__dirname,'../dist'),{
    branch:"master",
    repo:"git@e.coding.net:studio2401/cat-paw/deploy.git"
});
