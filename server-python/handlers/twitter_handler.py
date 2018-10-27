import tornado.web
from tornado.httpclient import AsyncHTTPClient

class TwitterHandler(tornado.web.RequestHandler):
    def get(self):
        req = AsyncHTTPClient()

        try:
            tweets = self.get_argument("tweets", "").split(",")
            req.fetch("")
        except Exception as err:
            self.set_status(400)
            self.finish(str(err))

        