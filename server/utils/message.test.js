var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Dave';
    let text = 'How you do?';
    let message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Dave';
    let latitude = 40.73061;
    let longitude = -73.935242;
    let url = 'https://www.google.com/maps?q=40.73061,-73.935242';
    let message = generateLocationMessage(from, latitude, longitude);
    console.log(message.url);
    expect(message.createdAt).toBeA('number');
    expect(from).toBe('Dave');
    expect(message.url).toBe(url);
  });
});
