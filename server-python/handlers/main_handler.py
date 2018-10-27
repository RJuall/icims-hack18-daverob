import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        with open("../web/build/index.html") as file:
            self.finish(file.read())
