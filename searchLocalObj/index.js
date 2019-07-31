const fs = require('fs');

function searchObject(obj, searchTerm) {
    // console.log('searchObject');
    // console.log('obj', obj);
    // console.log('searchTerm', searchTerm);
    Object.keys(obj).map(key => {
        // console.log('key', key)
        if (key == searchTerm) {
            // console.log('inside ifff');
            console.log(obj[key])
        } else if (typeof obj[key] === 'object') {
            // console.log('inside else ifff');
            searchObject(obj[key], searchTerm);
        }
    })
    return false
}

function getObjFromPath(path, obj) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log('err')
            return;
        }

        // console.log('data', data)
        let rootDoc = JSON.parse(data);
        // console.log('rootDoc', rootDoc);
        return searchObject(rootDoc, 'SortAs');

        // let rootDoc = JSON.parse(data);
        // return searchObject(rootDoc, obj);
    })
}

getObjFromPath('test.json');