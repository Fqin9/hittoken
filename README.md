# Hittoken

一个随机返回语句的 API 服务，数据可以自行更改，这里主要用周杰伦和孙燕姿的歌词

## 快速开始

```bash
npm install
npm start
```

服务启动后访问 `http://localhost:3000` 即可获取随机语句

也可以用命令获取：

```bash
curl http://localhost:3000
```


## API

### GET /

返回随机语句，格式如下：

```json
{
  "hitokoto": "雨下整夜，我的爱溢出就像雨水",
  "from": "七里香"
}
```

## License

MIT
