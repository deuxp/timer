const timers = process.argv.slice(2);
for (const timer of timers) {
  if (timer > 0 && !(isNaN(timer))) {
    setTimeout(() => {
      process.stdout.write(`ALARM! ${timer} second timer is done\n`);
    }, timer * 1000);
  }
}