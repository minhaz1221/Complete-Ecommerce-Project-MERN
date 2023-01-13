class ApiFeatures {
    constructor(query, qureyStr){
        this.query = query;
        this.queryStr =qureyStr;

    }
     search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {

        }
        this.query = this.query.find({...keyword});
        return this
     }

     filter() {
        const queryCopy = {...this.queryStr}
        const removeField = ["keyword","page","limit"];
        removeField.forEach(key => delete queryCopy[key]);

        //Filter for price and Rating
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/gt|gte|lt|lte/g, (key) => `$${key}`);

        console.log(this.queryStr);

        this.query = this.query.find(JSON.parse(queryStr))

        return this
     }
    
}

module.exports = ApiFeatures;