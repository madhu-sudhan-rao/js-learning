class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map()
    }

    // get the value from cache
    // if key is not found => return -1
    // if key is found
    // => get the value
    // => delete the record
    // => again store a new record with the same key, value
    get(key) {
        if(!this.cache.has(key)) {
            return -1;
        }

        const value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key)
    }



    // put the value in to the cache
    // if the cache already contains the key => delete the record
    // add a new record with the key
    // check if the cache size is above the capacity.
    // if cache size is greater, then delete the first record 
    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key)
        }

        this.cache.set(key, value)

        if(this.cache.size > this.capacity) {
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey)
        }
        
    }
}