import { render } from "@testing-library/react-native"

import { Input } from "@components/Input"

describe("Component: Input", () => {
    it("should render without activity indicator", () => {
        const { queryByTestId } = render(<Input />)
        expect(queryByTestId('activity-indicator')).toBeNull();
    })

    it("should render with the activity indicator", () => {
        const { getByTestId } = render(<Input isLoading />)
        expect(getByTestId('activity-indicator')).toBeTruthy();
    })
})