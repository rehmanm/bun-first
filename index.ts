import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      const body = figlet.textSync("Hello World");
      return new Response(body);
    }
    if (url.pathname === "/about") {
      const body = figlet.textSync("About");
      return new Response(body);
    }

    return new Response("404");
  },
});

console.log(`Listening on PORT http://localhost:${server.port}`);
