const express = require('express')

const app = express()//to create a instance of express or we can use const express = require('express')()

const mongoose = require('mongoose')

//to import the methods declared for the db schema
const Blog = require('./blog')

// connect to mongodb
const dburi = 'mongodb+srv://netninja:test123@lotus.bntou6d.mongodb.net/lotus?retryWrites=true&w=majority'
mongoose.connect(dburi,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(3000))// listening here
.catch((err)=>console.log(err))

// app.listen(3000)
//regester view engine
app.set('view engine', 'ejs'); 
app.set('views','.')

// middleware for static files
app.use(express.static('.'))
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
    const currentTime = new Date().toTimeString().split(' ')[0];
    const userIP = req.ip;
    const userAgent = req.get('User-Agent');
    console.log("new request made")
    console.log('User-Agent : ', userAgent);
    console.log('User IP : ', userIP);
    console.log('time : ', currentTime);
    console.log('host : ',req.hostname)
    console.log('path : ',req.path)
    console.log('method : ', req.method)
    next()
})

app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})

app.get('/createblog',(req,res)=>{
    res.render('createblog',{title:'createblog'})
})


// Find method to retrive all the blogs
app.get('/blogs',(req,res)=>{
    Blog.find()             //to display all the blogs and its an asynchronous so we have to use then and catch
    .then((result)=>{
        res.render('index',{title:"all blogs",blogs:result,head:'All Blogs'})
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/blogs',(req,res)=>{
   const blog = new Blog(req.body)//to create a new instance of Blog and req.body will get the data which is urlencoded
   blog.save()                      // to save the data to atlas
   .then((result)=>{
    res.redirect('/blogs')            //after saving send the data to the blogs to display the content in the homepage
   })
   .catch((err)=>{console.log(err)})
}) 

app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title:"KL Rahul: The Cricketing Virtuoso Redefining Brilliance",
        snippet:"KL Rahul, a symphony of elegance and innovation, crafts cricketing marvels that redefine excellence on the pitch.",
        body:"In the realm of Indian cricket, KL Rahul stands as a paragon of skill and determination. With his graceful technique and unwavering focus, he consistently mesmerizes fans across formats. A true chameleon of the game, he adapts seamlessly to any role, whether as an opener, middle-order anchor, or even as a wicketkeeper-batsman."
    })
    blog.save()
    .then((result)=>{res.send(result)})
    .catch((err)=>{console.log(err)})
})

app.get('/travel',(req,res)=>{
    Blog.find({typeofblog:"Travel"})
    .then((result)=>{
        res.render('index',{title:"Travel",blogs:result,head:'Travel'})
    })
    .catch((err)=>{console.log(err)})
})

// app.post('/travel',(req,res)=>{
//     const blog = new Blog(req.body)//to create a new instance of Blog and req.body will get the data which is urlencoded
//     blog.save()                      // to save the data to atlas
//     .then((result)=>{
//      res.redirect('/travel')            //after saving send the data to the blogs to display the content in the homepage
//     })
//     .catch((err)=>{console.log(err)})
//  })

 app.get('/sports',(req,res)=>{
    Blog.find({typeofblog:"Sports"})
    .then((result)=>{
        res.render('index',{title:"Sports",blogs:result,head:'Sports'})
    })
    .catch((err)=>{console.log(err)})
})

// app.post('/sports',(req,res)=>{
//     const blog = new Blog(req.body)//to create a new instance of Blog and req.body will get the data which is urlencoded
//     blog.save()                      // to save the data to atlas
//     .then((result)=>{
//      res.redirect('/sports',)            //after saving send the data to the blogs to display the content in the homepage
//     })
//     .catch((err)=>{console.log(err)})
//  })

 app.get('/tech',(req,res)=>{
    Blog.find({typeofblog:"Technology"})
    .then((result)=>{
        res.render('index',{title:"Tech",blogs:result,head:'Technology'})
    })
    .catch((err)=>{console.log(err)})
})

// app.post('/tech',(req,res)=>{
//     const blog = new Blog(req.body)//to create a new instance of Blog and req.body will get the data which is urlencoded
//     blog.save()                      // to save the data to atlas
//     .then((result)=>{
//      res.redirect('/tech')            //after saving send the data to the blogs to display the content in the homepage
//     })
//     .catch((err)=>{console.log(err)})
//  })

 app.get('/movies',(req,res)=>{
    Blog.find({typeofblog:"Movies"})
    .then((result)=>{
        res.render('index',{title:"Movies",blogs:result,head:'Movies'})
    })
    .catch((err)=>{console.log(err)})
})

// app.post('/movies',(req,res)=>{
//     const blog = new Blog(req.body)//to create a new instance of Blog and req.body will get the data which is urlencoded
//     blog.save()                      // to save the data to atlas
//     .then((result)=>{
//      res.redirect('/movies')            //after saving send the data to the blogs to display the content in the homepage
//     })
//     .catch((err)=>{console.log(err)})
//  })

 app.get('/buisness',(req,res)=>{
    Blog.find({typeofblog:"Buisness"})
    .then((result)=>{
        res.render('index',{title:"Buisness",blogs:result,head:'Buisness'})
    })
    .catch((err)=>{console.log(err)})
})

// app.post('/buisness',(req,res)=>{
//     const blog = new Blog(req.body)//to create a new instance of Blog and req.body will get the data which is urlencoded
//     blog.save()                      // to save the data to atlas
//     .then((result)=>{
//      res.redirect('/buisness')            //after saving send the data to the blogs to display the content in the homepage
//     })
//     .catch((err)=>{console.log(err)})
//  })

 app.get('/others',(req,res)=>{
    Blog.find({typeofblog:"others"})
    .then((result)=>{
        res.render('index',{title:"Others",blogs:result,head:'Other Blogs'})
    })
    .catch((err)=>{console.log(err)})
})

app.post('/others',(req,res)=>{
    const blog = new Blog(req.body)//to create a new instance of Blog and req.body will get the data which is urlencoded
    blog.save()                      // to save the data to atlas
    .then((result)=>{
     res.redirect('/others')            //after saving send the data to the blogs to display the content in the homepage
    })
    .catch((err)=>{console.log(err)})
 })


app.use((req,res)=>{
    res.status(404).render('404')
})