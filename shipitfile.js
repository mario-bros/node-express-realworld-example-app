
require("dotenv").config();


// shipitfile.js
module.exports = shipit => {
  // Load shipit-deploy tasks
  require("shipit-deploy")(shipit)

  shipit.initConfig({
    default: {
      deployTo: "/home/mario/core-app",
      repositoryUrl: "https://mnc-repo.mncdigital.com/big-data/core-uam.git",
      ignores: ["node_modules", ".git", "shipitfile.js"],
      key: process.env.SSH_PRIV_KEY_PATH
    },
    staging: {
      servers: "mario@10.10.16.152"
      // key: '/mnt/c/Users/mario.fredrick/.ssh/id_rsa.pub'
      // workspace: '/home/mario/core-app/current'
    }
  })

  shipit.task("deployCore", async () => {
    // shipit.remote("cd /home/mario/core-app/current")
    // shipit.remote("ls /home/mario/core-app/current")
    await shipit.remote("cd /home/mario/core-app/current && rm -R ./*")
    await shipit.copyToRemote("*", "/home/mario/core-app/current")

    shipit.remote("cd /home/mario/core-app/current && npm install").then( () => {
      // shipit.remote("npm update")
      // shipit.remote("ls -al")
    })
  })

  // shipit.start("deployCore")
}
