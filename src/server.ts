// 添加本地启动入口
import app from "./app";

const start = async () => {
    try{
        const port = Number(process.env.PORT) || 3000;

        await app.listen({
            port,
            host: "0.0.0.0"
        });

        console.log(`Server is running at http://localhost:${port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

start();