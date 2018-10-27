import os
import tornado.web
import tornado.httpserver
import tornado.ioloop
from handlers import MainHandler

app = tornado.web.Application([
    (r"/", MainHandler)
], static_path="./web/build/static/")

http_server = tornado.httpserver.HTTPServer(app)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))

    http_server.listen(port)
    tornado.ioloop.IOLoop.current().start()