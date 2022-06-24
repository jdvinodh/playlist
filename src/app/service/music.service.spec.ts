import { MusicListService } from './music.service';

describe('MusicListService', () => {
  let service: MusicListService;
  it('should be created', () => {
    expect(MusicListService).toBeTruthy();
  });

  describe('ProducList', () => {
    it('should set product', () => {
    //   const product = [
    //     {
    //       id: 1,
    //       name: 'Small Rubber Table',
    //       description:
    //         'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    //       defaultImage: 'http://placeimg.com/640/480/cats',
    //       images: [
    //         'http://placeimg.com/640/480/cats',
    //         'http://placeimg.com/640/480/cats',
    //         'http://placeimg.com/640/480/cats',
    //         'http://placeimg.com/640/480/cats',
    //       ],
    //       price: 56599.41,
    //       discount: 44,
    //     },
    //   ];

      //  const productListSpy = spyOn(service.productList, 'next');

      service.getMusicList();
      //     expect(productListSpy).toHaveBeenCalledWith(product);
    });
  });
});
