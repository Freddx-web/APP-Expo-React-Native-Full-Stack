
/**
 * Index
 */
import { connectDB } from './database/connect.js'
import app from './app';


// Start App
async function main() {
  try {
    // Connect MongonDB
    await connectDB();
    //Server
    app.listen(app.get('port'),() => {
      console.log(`URL: http://localhost:${app.get('port')}/api`);
    });

  } catch (error) {
    console.error(error);
  }
};

main();


