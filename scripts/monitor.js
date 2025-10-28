const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: { interval: 60000, alertThreshold: 80, debugMode: false },
  development: { interval: 5000, alertThreshold: 90, debugMode: true, verboseLogging: true },
  experimental: { interval: 2000, alertThreshold: 70, debugMode: true, aiMonitoring: true }
};

const config = monitorConfig[ENV];

console.log('=================================');
console.log(`DevOps Simulator - Monitor`);
console.log(`Environment: ${ENV}`);
console.log(`Debug: ${config.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Checking system health...`);
  console.log('✓ CPU usage: Normal');
  console.log('✓ Memory usage: Normal');
  console.log('✓ Disk space: Adequate');

  if (config.debugMode) {
    console.log('✓ Hot reload: Active');
    if (config.aiMonitoring) console.log('✓ AI anomaly detection: Active');
  }

  console.log('System Status: HEALTHY');
}

console.log(`Monitoring every ${config.interval}ms`);
setInterval(checkSystemHealth, config.interval);
checkSystemHealth();
