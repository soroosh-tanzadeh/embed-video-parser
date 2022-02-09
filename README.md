# Embed Parser
Create embed iframe url from aparat, youtube and vimeo video 

## How to use

```
npm i embed-video-parser
```

```ts
import embedParser from "embed-video-parser";

console.log(embedParser.parse("https://www.youtube.com/watch?v=r9HdJ8P6GQI"));
```

### Output
```json
{
    "id":"r9HdJ8P6GQI",
    "name":"youtube",
    "embed":"https://www.youtube.com/embed/r9HdJ8P6GQI"
}
```


