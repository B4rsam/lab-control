// eslint-disable-next-line @typescript-eslint/no-require-imports
const { WebSocketServer } = require("ws");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const si = require("systeminformation");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const next = require("next");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const http = require("http");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = http.createServer((req, res) => handle(req, res));

        const wss = new WebSocketServer({ server });

        wss.on("connection", async (socket) => {
            console.log("Websocket connected");

            const { speed, speedMax, speedMin, governor, brand } = await si.cpu();
            const { total, used, swaptotal, swapused } = await si.mem();

            const { hasBattery, isCharging, percent, acConnected, timeRemaining } =
                await si.battery();

            const data = {
                timestamp: new Date().toISOString(),
                cpu: {
                    speed,
                    speedMax,
                    speedMin,
                    governor,
                    brand,
                },
                memory: {
                    total,
                    used,
                    swapused,
                    swaptotal,
                },
                battery: {
                    hasBattery,
                    isCharging,
                    percent,
                    acConnected,
                    timeRemaining,
                },
            };

            socket.send(
                JSON.stringify({
                    message: "Data sent - " + Date.now(),
                    data,
                })
            );
        });

        wss.on("close", () => {
            console.log("Websocket closed");
        });

        const port = 3000;
        server.listen(port, () => {
            console.log("Listening on port " + port);
        });
    })
    .catch((err) => console.log(err.message));
