import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("API: getCityByNameService", () => {
    it("should return city details based on the name", async () => {
        const data = {
            "coord": {
                "lon": -74.006,
                "lat": 40.7143
            },
            "sys": {
                "country": "US",
            },
            "id": 5128581,
            "name": "New York",
        }
        jest.spyOn(api, "get").mockResolvedValue({ data })
        const response = await getCityByNameService("New York");
        expect(response).toHaveLength(1)
    })
})