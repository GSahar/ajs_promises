import GameSavingLoader from '../gameSavingLoader';

test('should sum', (done) => {
  GameSavingLoader.load().then((saving) => {
    const result = saving;
    expect(result).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
    done();
  }, (error) => {
    console.log(error.message);
  });
});
