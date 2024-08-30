import { act, renderHook, waitFor } from "@testing-library/react-native"
import { useCity } from "@hooks/useCity"
import { CityProvider } from "@contexts/CityContext"

describe("Context: CityContext", () => {
    it("should change the current city", async () => {
        const { result } = renderHook(() => useCity(), { wrapper: CityProvider })

        await waitFor(() => act(() => {
            result.current.handleChanceCity({
                id: '1',
                latitude: 123,
                longitude: 456,
                name: "New York"
            })

            expect(result.current.city?.name).toBe("New York")
        }))

    })
})