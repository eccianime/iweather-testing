import { fireEvent, render } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
    const data = [
        { id: '1', name: "New York", latitude: 123, longitude: 456 },
        { id: '2', name: "Miami", latitude: 654, longitude: 321, },
        { id: '3', name: "Florida", latitude: 918, longitude: 182, }
    ]
    it("should return the selected city from the list", () => {
        const onPress = jest.fn();
        const onChange = jest.fn();

        const { getByText } = render(<SelectList data={data} onChange={onChange} onPress={onPress} />)
        const targetCity = getByText('Miami');
        fireEvent.press(targetCity);
        expect(onPress).toHaveBeenCalledWith(data[1]);
    })

    it("should not show any options when array is empty", () => {
        const { getByTestId } = render(<SelectList data={[]} onChange={() => { }} onPress={() => { }} />)
        const options = getByTestId('options');
        expect(options.children).toHaveLength(0);
    })

    it("should show 3 options when array length 3", () => {
        const { getByTestId } = render(<SelectList data={data} onChange={() => { }} onPress={() => { }} />)
        const options = getByTestId('options');
        expect(options.children).toHaveLength(3);
    })
})