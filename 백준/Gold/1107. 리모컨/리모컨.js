const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const targetChannel = Number(input[0]);
  const brokenButtons = input.length > 2 ? input[2].split(' ')?.map(Number) : [];

  let minPress = Math.abs(targetChannel - 100); // +/- 버튼만 사용하는 경우

  for (let channel = 0; channel <= 1000000; channel++) {
    if (canPress(channel)) {
      const press = Math.abs(channel - targetChannel) + channel.toString().length;
      minPress = Math.min(minPress, press);
    }
  }

  console.log(minPress);

  function canPress(channel) {
    const channelStr = channel.toString();
    for (let i = 0; i < channelStr.length; i++) {
      if (brokenButtons.includes(parseInt(channelStr[i]))) {
        return false;
      }
    }
    return true;
  }
};

solution();
