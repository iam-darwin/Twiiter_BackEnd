import Tweet from '../model/tweet.js';

class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            throw { error };
        }
    }
}

export default TweetRepository;
