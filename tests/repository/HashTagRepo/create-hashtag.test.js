import HashTag from "../../src/model/hashtag.js";
import HashTagRepository from "../../src/repository/hashRepo";

jest.mock("../../src/model/hashtag.js");

describe("Testing create Hashtag", () => {
  test("should create a hashTag and return it", async () => {
    const data = {
      title: "First",
    };
    const spy = jest.spyOn(HashTag, "create").mockImplementation(() => {
      return {
        ...data,
        createdAt: "Date",
        updatedAt: "Date",
      };
    });
    const hashTagRepo = new HashTagRepository();
    const result = await hashTagRepo.create(data);

    expect(spy).toHaveBeenCalled();
    expect(result.title).toBe(data.title);
    spy.mockRestore();
  });

  test("should throw error for not creating", async () => {
    const data = {
      title: "First",
    };

    const spy = jest.spyOn(HashTag, "create").mockImplementation(() => {
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
