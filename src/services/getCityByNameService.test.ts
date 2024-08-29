import { mockCityAPIResponse } from "@__mocks__/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("API: getCityByNameService", () => {
    it("should return city details based on the name", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })
        const response = await getCityByNameService("New York");
        console.log(response)
        expect(response).toHaveLength(1)
    })
})