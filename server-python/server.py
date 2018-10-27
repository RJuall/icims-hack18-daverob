import os
import tornado.web
import tornado.httpserver
import tornado.ioloop
from handlers import *

app = tornado.web.Application([
    (r"/", MainHandler),
    (r"/test", TestHandler),
    (r"/twitter", TwitterHandler)
], static_path="../web/build/static/", debug=bool(os.environ.get("DEBUG", False)))

http_server = tornado.httpserver.HTTPServer(app)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))

    http_server.listen(port)
    tornado.ioloop.IOLoop.current().start()