import { getWeatherByCityService } from './getWeatherByCityService';
import { api } from './api';
import { mockWeatherAPIResponse } from '@__mocks__/mockWeatherAPIResponse';

describe('API: getWeatherByCityService', () => {
  it('should return weather data based on a given latitude and longitude data', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });
    const response = await getWeatherByCityService({
      latitude: -74.006,
      longitude: 40.7143,
    });
    expect(response).toHaveProperty('today');
  });
});
