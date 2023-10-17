import HashTag from "../../../src/model/hashtag.js";
import HashTagRepository from "../../../src/repository/hashRepo.js";

jest.mock('../../../src/model/hashtag.js');

describe('HashTag Find Many', () => {
    test('should return an array of objects', async () => {
        const data=['first','second'];
        const spy=jest.spyOn(HashTag,'find').mockImplementation(()=>{
            return [
                {
                    id:1,
                    title:data[0]
                },
                {
                    id:2,
                    title:data[1]
                }
            ]
        })

        const hashRepo=new HashTagRepository();
        const result=await hashRepo.findMany(data);
        
        expect(spy).toHaveBeenCalled();
        expect(result[0].title).toBe(data[0]);
        spy.mockRestore();
    });

    test("should throw error for not returning array of objects", async () => {
        const data=['first','second'];
    
        const spy = jest.spyOn(HashTag, "find").mockImplementation(() => {
          throw new Error("Something went wrong on Repo layer");
        });
    
        const hashTagRepo = new HashTagRepository();
        const result = await hashTagRepo.create(data).catch((err) => {
            expect(spy).toHaveBeenCalled();
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe("Something went wrong on Repo layer")
        });
    
        expect(result).toBeUndefined();
        spy.mockRestore();
      });
});