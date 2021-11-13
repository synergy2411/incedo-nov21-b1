import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it("Should reverse the string", () => {
    const pipe = new ReversePipe();
    expect(pipe.transform("abc")).toEqual('cba')
  })

});
