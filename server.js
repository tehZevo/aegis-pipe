var ProtoPost = require("protopost");

var protopost = ProtoPost.client;

var port = process.env.PORT || "80";
port = parseInt(port)
var urls = process.env.URLS;
if(urls == null || urls.trim() == "")
{
  console.error("Must provide at least one url via URLS");
  process.exit(1);
}

urls = urls.split(/\s+/);
console.log(urls)

async function doPipe(x)
{
  //for every url
  for(var url of urls)
  {
    //call protopost function on x, store result in x
    x = await protopost(url, "", x);
  }

  return x;
}

new ProtoPost({}, doPipe).start(port);
