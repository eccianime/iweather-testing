import { render } from "@testing-library/react-native"
import { WeatherItem } from "@components/WeatherItem"

import DropIcon from '@assets/drop.svg'

describe("Component: WeatherItem", () => {
    it("should show the title and the value", () => {
        const { getByText } = render(
            <WeatherItem
                icon={DropIcon}
                title="Humedad del Aire"
                value="80%"
            />
        )
        const title = getByText("Humedad del Aire")
        const value = getByText("80%")

        expect(title).toBeTruthy();
        expect(value).toBeTruthy();
    })
})