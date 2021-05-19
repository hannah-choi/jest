import Fetch from "./fetch";
import axios from "axios";

jest.mock("axios");

describe("the fetch service", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: "foo" });
  });
  it("should get data from url", async () => {
    Fetch();
    expect(await axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos"
    );
  });
  it("should return data", async () => {
    expect(await Fetch()).toBe("foo");
  });
});

//목서비스는 프로젝트 전체에 generic하게 적용되기 때문에
//이파일에서 굳이 __mock__폴더를 만들 필요는 없다.
