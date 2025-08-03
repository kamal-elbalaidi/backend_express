import app from "./app";
import { AppConfig } from "./core/common/constants/constants.app";


const port: number = AppConfig.port;

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
