const dbService = require('./mongoDbService');
const { BlogModel } = require('../routes/blogs/blogModel');

exports.getAllBlogs = async () => {
    return await dbService.getAllDocuments(BlogModel);
};

exports.createBlog = async (blog) => {
    return await dbService.createDocument(BlogModel, blog);
};

exports.getBlogById = async (id) => {
    return await dbService.getDocumentById(BlogModel, id);
};

exports.updateBlog = async (id, blog) => {
    return await dbService.updateDocument(BlogModel, id, blog);
};

exports.deletBlog = async (id) => {
    return await dbService.deleteDocumentByID(BlogModel, id);
};