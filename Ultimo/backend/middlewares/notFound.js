const notFound = (req, res) => {
    res.status(404).json({
        error: (`Not Found [${req.path}]`),
    });
};

export default notFound;
