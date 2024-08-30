import {
  saveStorageCity,
  getStorageCity,
  removeStorageCity,
} from './cityStorage';
import { CityProps } from '@services/getCityByNameService';

const fakeCity: CityProps = {
  id: '1',
  latitude: 123,
  longitude: 456,
  name: 'Fake City',
};

describe('Storage: CityStorage', () => {
  it("should return null when there's no city in storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should return a JSON parsed city when there's a city in storage", async () => {
    await saveStorageCity(fakeCity);
    const response = await getStorageCity();
    expect(response).toEqual(fakeCity);
  });

  it('should remove a previously saved city', async () => {
    await saveStorageCity(fakeCity);
    await removeStorageCity();
    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});
