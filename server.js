const chalk = require('chalk');
const app = require('./app');

app.listen(4000, () => {
  console.log(chalk.green('Server started...'));
});
