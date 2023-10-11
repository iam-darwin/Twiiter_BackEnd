import HashTag from '../model/hashtag.js';

class HashTagRepository {
    async create(data) {
        try {
            const hashTag = await HashTag.create(data);
            return hashTag;
        } catch (error) {
            throw { error };
        }
    }

    async findMany(titlesToFind) {
        try {
            const tweetsInfo = await HashTag.find({
                title: {
                    $in: titlesToFind,
                },
            });
            return tweetsInfo;
        } catch (error) {
            throw { error };
        }
    }

    async bulkCreate(array) {
        try {
            const data = await HashTag.insertMany(array);
            return data;
        } catch (error) {
            throw { error };
        }
    }
}

export default HashTagRepository;
