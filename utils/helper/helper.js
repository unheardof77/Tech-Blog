const moment = require('moment');

module.exports = {
    format_time: (data) => {
        return moment(data).format("dddd, MMMM Do YYYY, h:mm:ss a");
    }
}