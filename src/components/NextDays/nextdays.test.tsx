import { render } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";

import clearDayIcon from "@assets/clear_day.svg"

describe("Component: NextDays", () => {
    it("should render next days", () => {
        const { getByText } = render(<NextDays data={[
            { day: '01/08', icon: clearDayIcon, max: '20°C', min: '15°C', weather: 'Cielo Azul' },
            { day: '02/08', icon: clearDayIcon, max: '25°C', min: '12°C', weather: 'Nublado' },
            { day: '03/08', icon: clearDayIcon, max: '30°C', min: '20°C', weather: 'Soleado' },
            { day: '04/08', icon: clearDayIcon, max: '15°C', min: '13°C', weather: 'Nublado' },
            { day: '05/08', icon: clearDayIcon, max: '18°C', min: '12°C', weather: 'Lluvia' }
        ]} />)

        expect(getByText('05/08')).toBeTruthy()
    })
})