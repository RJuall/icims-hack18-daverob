import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        with open("index.html") as file:
            self.finish(file.read())
