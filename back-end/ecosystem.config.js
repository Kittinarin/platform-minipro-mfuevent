module.exports = {
    apps: [
      {
        name: 'back-thx',
        exec_mode: 'cluster',
        instances: '1', // Or a number of instances
        script: './server.js',
        args: 'start'
      }
    ]
  }