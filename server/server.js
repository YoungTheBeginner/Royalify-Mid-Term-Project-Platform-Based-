const app = require('./app');
const path = require('path');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`ROYALIFY server listening on port ${PORT}`);
});
