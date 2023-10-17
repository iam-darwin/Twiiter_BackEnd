import HashTag from "../../../src/model/hashtag.js";
import HashTagRepository from "../../../src/repository/hashRepo.js";

jest.mock("../../../src/model/hashtag.js");

describe("Creating bulk hashTags", () => {
  test("should create many hashtags ",async () => {
    const data = ["second", "third"];
    const spy = jest.spyOn(HashTag, "insertMany").mockImplementation(() => {
      return [
        {
          id: 1,
          title: data[0],
        },
        {
          id: 2,
          title: data[1],
        },
      ];
    });

    const hashRepo=new HashTagRepository();
    const result =await hashRepo.bulkCreate();

    expect(result[0].title).toBe(data[0]);
    spy.mockRestore();
  });

  test("should throw error for not returning array of objects", async () => {
    const data = ["second", "third"];

    const spy = jest.spyOn(HashTag, "insertMany").mockImplementation(() => {
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
