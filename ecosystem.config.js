module.exports = {
    apps: [{
        name: "app-repomun",
        script: "./start.js",
        watch: true,
        max_momory_restart: '1000M',
        exec_mode: "cluster",
        instances: 1,
        cron_restart: "59 24 * * *",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}