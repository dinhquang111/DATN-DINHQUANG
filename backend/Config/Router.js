const app = require('./app');

const brandsRouter = require('../Routes/Brands')
const userRouter = require('../Routes/Users');
const originRouter = require('../Routes/Origins')
const petRouter = require('../Routes/Pets')
const ProductRouter = require('../Routes/Product')
const UploadRouter = require('../Routes/Upload')
const CatelogyRouter = require('../Routes/Category')
const CategoryBlogRouter = require('../Routes/CategoryBlog')
const BlogsRouter = require('../Routes/Blogs')
const forumRouter = require('../Routes/Forum/Forum')
const forumTopicRouter = require('../Routes/Forum/ForumTopic')
const forumChillRouter = require('../Routes/Forum/ForumChill')
const cartRouter = require('../Routes/Cart')
const apiPrefix = '/api/v1';

// app.use(`${apiPrefix}/auth`,authRouter);
app.use(`${apiPrefix}/product`, UploadRouter)
app.use(`${apiPrefix}/product`, ProductRouter)
app.use(`${apiPrefix}/product`, petRouter)
app.use(`${apiPrefix}/product`, originRouter)
app.use(`${apiPrefix}/product`, brandsRouter)
app.use(`${apiPrefix}/product`, CatelogyRouter)
app.use(`${apiPrefix}/blog`, CategoryBlogRouter)
app.use(`${apiPrefix}/blog`, BlogsRouter)
app.use(`${apiPrefix}/forum`, forumRouter)
app.use(`${apiPrefix}/forum`, forumTopicRouter)
app.use(`${apiPrefix}/forum`, forumChillRouter)
app.use(`${apiPrefix}/users`, userRouter);
app.use(`${apiPrefix}/purchase`, cartRouter);
