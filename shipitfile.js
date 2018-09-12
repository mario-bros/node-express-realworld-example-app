// shipitfile.js
module.exports = shipit => {
  // Load shipit-deploy tasks
  require("shipit-deploy")(shipit)

  shipit.initConfig({
    default: {
      deployTo: "/home/mario/core-app",
      repositoryUrl: "https://mnc-repo.mncdigital.com/big-data/core-uam.git",
      ignores: ["node_modules", ".git"]
    },
    staging: {
      servers: "mario@10.10.16.152"
    }
  })

  shipit.task("deployCore", async () => {
    shipit.remote("ls /home/mario/core-app")
    // await shipit.copyToRemote("*", "/home/mario/core-app/")
  })
  shipit.start("deployCore")
}
