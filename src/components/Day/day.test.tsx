import { render } from "@testing-library/react-native"
import { Day } from "@components/Day"

import clearDayIcon from "@assets/clear_day.svg"

describe("Component: Day", () => {
    it("should render day component", () => {
        const { getByText } = render(
            <Day data={{
                day: '30/08',
                icon: clearDayIcon,
                max: '18°C',
                min: '5°C',
                weather: 'Cielo Azul'
            }} />
        )
        expect(getByText('30/08')).toBeTruthy();
    })
})
