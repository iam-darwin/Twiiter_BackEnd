import Tweet from '../model/tweet.js';
import CrudRepository from './crudRepo.js';

class TweetRepository extends CrudRepository {
    constructor(){
        super(Tweet)
    }
}

export default TweetRepository;
