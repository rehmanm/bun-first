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
    if (url.pathname === "/feed") {
      throw new Error("Could Not Fetch feed");
    }
    if (url.pathname === "/greet") {
      return new Response(Bun.file("./greet.txt"));
    }

    return new Response("404");
  },
  error(error) {
    return new Response(`<pre>${error} \n${error.stack} </pre>`, {
      headers: {
        "Content-type": "text/html",
      },
    });
  },
});

console.log(`Listening on PORT http://localhost:${server.port}`);
