import { createAdmin } from "../routes/auth.routes.js";
import { connectDB } from "../config/db.js";

connectDB();
await createAdmin();
console.log("Admin creation script executed successfully");
process.exit(0);
