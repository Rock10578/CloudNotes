# CloudNotes

CloudNotes is an easy-to-use online platform where you can quickly create, save, and access your notes anytime, from any device. It keeps everything organized, safe, and accessible whenever you need it—whether it's ideas, reminders, or crucial information. The notes are always available with the use of Cisco server which consist of triple server, as a backup in case 1 goes down other will let you access your notes.


## Points

In server.js file in updated node import will not work variable method (const) will work but to use import method add "type": "module" in package.json

## Usefull Commands

To Run Backend : 
```bash
    npm run dev
```

To Run Frontend : 
```bash
    npm run start
```

By Default node server.js will work to use npm add to package.json :
```
"scripts": {
    "dev": "node server.js"
  }
```

## Usefull Github Commands :

In case need to remove files which was added in staging area (clear stage area) use command
```bash
    git restore --staged .
```

In case no comments added yet use command, this will clear the staging area.
```bash
    git rm --cached -r .f
```

To check remote location
```bash
    git remote -v
```

To view commit logs
```bash
    git log --online
```

# Files used

![Logo](https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png)

![Logo](https://camo.githubusercontent.com/86f61f7d4367c71a580e11af0bcd4f333d1b967225a679a12998657db1307dd3/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67)

![Logo](https://camo.githubusercontent.com/970a2374fa24a82b811957363ebe31c9df81e8deb3974d9c5fe6fc9c00dcf79e/68747470733a2f2f6e6f6465692e636f2f6e706d2f6d6f6e676f6f73652e706e67)

![Logo](https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.svg)