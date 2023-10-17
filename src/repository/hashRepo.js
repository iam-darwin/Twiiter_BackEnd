import HashTag from '../model/hashtag.js';

class HashTagRepository {
    async create(data) {
        try {
            const hashTag = await HashTag.create(data);
            return hashTag;
        } catch (error) {
            throw new Error("Something went wrong on Repo layer");
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
            throw new Error("Something went wrong on Repo layer");
        }
    }

    async bulkCreate(array) {
        try {
            const data = await HashTag.insertMany(array);
            return data;
        } catch (error) {
            throw new Error("Something went wrong on Repo layer");
        }
    }
}

export default HashTagRepository;
