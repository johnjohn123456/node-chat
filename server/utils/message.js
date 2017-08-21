var generateMessage = (from ,text,port) =>{
    return {
        from,
        text,
        createAt: new Date().getTime(),
        port
    };
};

module.exports = {
    generateMessage
}