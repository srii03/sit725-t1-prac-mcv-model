// views/indexView.js
const indexView = {
    renderIndexPage: (res) => {
        res.sendFile(__dirname + '/../public/index.html');
    }
};

module.exports = indexView;