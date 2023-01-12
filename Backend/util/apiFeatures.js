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
        console.log(this.query);
        this.query = this.query.find({...keyword});
        return this
     }
    
}

module.exports = ApiFeatures;