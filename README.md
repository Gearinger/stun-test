## Stun 测试
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FGearinger%2Fstun-test.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FGearinger%2Fstun-test?ref=badge_shield)


### 1、Stun Server

[jselbie/stunserver](https://github.com/jselbie/stunserver)

```shell
# 启动 server 服务。默认tcp/udp 端口均为3478
stunserver.exe
```

### 2、Stun Client

[nodertc/stun](https://github.com/nodertc/stun)

```shell
# 安装 stun 类库
npm i stun
```

```js
// 引入 stun
const stun = require('stun');

// 测试连接到 stun 服务器
stun.request('localhost:3478').then(res=>{
    console.log(res);
    console.log('your ip', res.getXorAddress().address);
});
```

```shell
# 返回结果
<ref *1> StunResponse {
  [Symbol(kMessageType)]: 257,
  [Symbol(kTransctionId)]: <Buffer d0 ae 6a fa 60 f2 86 69 95 e6 cd 32>,
  [Symbol(kCookie)]: 554869826,
  [Symbol(kAttributes)]: [
    StunAddressAttribute {
      [Symbol(kAttributeType)]: 1,
      [Symbol(kPort)]: 54765,
      [Symbol(kAddress)]: '127.0.0.1',
    },
    StunAddressAttribute {
      [Symbol(kPort)]: 3478,
      [Symbol(kAddress)]: '127.0.0.1',
      [Symbol(kFamily)]: 'IPv4'
    },
    StunXorAddressAttribute {
      [Symbol(kAttributeType)]: 32,
      [Symbol(kPort)]: 54765,
      [Symbol(kAddress)]: '127.0.0.1',
      [Symbol(kFamily)]: 'IPv4',
      [Symbol(kOwner)]: [Circular *1]
    }
  ]
}
your ip 127.0.0.1
```

> 详细使用查看官方文档


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FGearinger%2Fstun-test.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FGearinger%2Fstun-test?ref=badge_large)