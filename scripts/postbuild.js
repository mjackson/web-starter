const execSync = require('child_process').execSync

const exec = (command) =>
  execSync(command, { stdio: 'inherit' })

if (process.env.BUILD_ASSETS)
  exec('npm run build-assets')
