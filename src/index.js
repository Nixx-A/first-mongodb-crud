const app = require('./app')
require('./db')
const { PORT } = require('./config')

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})