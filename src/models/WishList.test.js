import { WishList, WishListItem } from './WishList';

it('can create an instance of a model', () => {
  const item = WishListItem.create({
    'name': 'My Product',
    'price': 27.76,
    'image': 'www.shuvohabib.com/img',
  });
  expect(item.name).toBe('My Product');
});

