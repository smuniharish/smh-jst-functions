import { getLocaleByCode } from '../index';
test('test 1 - getLocaleByCode', () => {
  expect(getLocaleByCode('zu-za')).toStrictEqual({
    id: 1077,
    location: 'South Africa',
    language: 'Zulu',
    tag: 'zu-ZA',
  });
});
