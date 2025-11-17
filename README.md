To Run Backend : "npm run dev"
By Default node server.js will work to use npm add to package.json
"scripts": {
    "dev": "node server.js"
  }


In server.js file in updated node import will not work variable method will work but to use import method add "type": "module" in package.json





###Github Helpfull Commands :

In case need to remove files which was added in staging area (clear stage area) use command 
git restore --staged .

In case no comments added yet use command, this will clear the staging area.
git rm --cached -r .

To check remote location
git remote -v

To view commit logs
git log --online



Files used 
nodemon
mongoose
dotenv