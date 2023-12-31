const Blog = require("../models/blogModel");



const router = async function (req, res) {






// GET: /api/blogs
if (req.url === "/api/blogs" && req.method === "GET") {
    // get all blogs
    const blogs = await Blog.find();
 
    // set the status code and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
 
    // send data
    res.end(JSON.stringify(blogs));
}


// GET: /api/blogs/:id
if (req.url.match(/\/api\/blogs\/([0-9]+)/) && req.method === "GET") {
    try {
        // extract id from url
        const id = req.url.split("/")[3];
 
        // get blog from DB
        const blog = await Blog.findById(id);
        console.log(blog);
        if (blog) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(blog));
        } else {
            throw new Error("Blog does not exist");
        }
    } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        console.log(error);
        res.end(JSON.stringify({ message: error.message }));
    }
}


// POST: /api/blogs/
if (req.url === "/api/blogs" && req.method === "POST") {
    try {
        let body = "";
 
        // Listen for data event
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
 
        // Listen for end event
        req.on("end", async () => {
            // Create Blog
            let blog = new Blog(JSON.parse(body));
 
            // Save to DB
            await blog.save();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(blog));
        });
    } catch (error) {
        console.log(error);
    }
}



// PUT: /api/blogs/:id
if (req.url.match(/\/api\/blogs\/([0-9]+)/) && req.method === "PUT") {
    try {
        // extract id from url
        const id = req.url.split("/")[3];
        let body = "";
 
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", async () => {
            // Find and update document
            let updatedBlog = await Blog.findByIdAndUpdate(id, JSON.parse(body), {
                new: true,
            });
 
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(updatedBlog));
        });
    } catch (error) {
        console.log(error);
    }
}


// DELETE: /api/blogs/:id
if (req.url.match(/\/api\/blogs\/([0-9]+)/) && req.method === "DELETE") {
    try {
        const id = req.url.split("/")[3];
        
       // Delete blog from DB
        await Blog.findByIdAndDelete(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Blog deleted successfully" }));
    } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: error }));
    }
}

};

module.exports = router;