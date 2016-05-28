const fs = require('fs')
const path = require('path')
const readline = require('readline')
const execSync = require('child_process').execSync

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(`What is the name of your project? `, (projectName) => {
  rl.close()

  const workingDir = process.cwd()
  const outputDir = path.resolve(workingDir, projectName)
  const relativeDir = path.relative(workingDir, outputDir)

  execSync(`git clone --depth 1 https://github.com/mjackson/web-starter ${outputDir}`)

  fs.stat(outputDir, (error, stats) => {
    if (error) {
      console.error(error)
      process.exit(1)
    }
    
    if (!stats.isDirectory()) {
      console.error(`Failed to clone web-starter into ${outputDir}`)
      process.exit(1)
    }

    process.chdir(outputDir)

    execSync(`rm -rf .git app.json install.js`)

    process.chdir(workingDir)

    console.log(`Created a new project in ./${relativeDir}`)
    process.exit(0)
  })
})
