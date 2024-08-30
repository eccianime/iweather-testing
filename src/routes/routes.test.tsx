import { act, render, waitFor } from "@testing-library/react-native"
import { Routes } from "."
import { CityProps } from "@services/getCityByNameService"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProvider } from "@contexts/CityContext"
import { api } from "@services/api"
import { mockWeatherAPIResponse } from "@__mocks__/mockWeatherAPIResponse"

describe("Routes", () => {
    it("should show Search screen when there's no city selected", async () => {
        const { findByText } = render(<Routes />)
        const title = await waitFor(() => {
            return findByText("Escoja un lugar para ver la previsión del tiempo")
        })
        expect(title).toBeTruthy();
    })

    it("should show Dashboard screen when there's a city selected", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

        const fakeCity: CityProps = {
            id: '1',
            name: 'Fake City',
            latitude: 123,
            longitude: 456,
        }
        await saveStorageCity(fakeCity);
        const { getByText } = render(<Routes />, { wrapper: CityProvider })

        const title = await waitFor(() => act(() => {
            return getByText(fakeCity.name);
        }))

        expect(title).toBeTruthy()
    })

})