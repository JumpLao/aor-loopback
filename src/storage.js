
export default {
    save : function(key, value, expirationSec){
        if (typeof (Storage) == "undefined") { return false; }
        var expirationMS = expirationSec * 1000;
        var record = {value: value, timestamp: new Date().getTime() + expirationMS};
        localStorage.setItem(key, JSON.stringify(record));
        return value;
    },
    load : function(key){
        if (typeof (Storage) == "undefined") { return false; }
        var record = localStorage.getItem(key);
        if (!record){return false;}
        return (new Date().getTime() < record.timestamp && record.value);
    },
    remove : function(key){
        if (typeof (Storage) == "undefined") { return false; }
        localStorage.removeItem(key);
    }
};