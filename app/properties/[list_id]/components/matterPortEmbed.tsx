"use client";

const matterPortEmbed = ({ link, height }: any) => {
  const yt0 = check_for_embed_youtube_link(link) 
  const yt1 = check_for_share_youtube_link(link) 
  const yt2 = check_for_normal_youtube_link(link) 
  console.log(link,yt0??yt1??yt2)
  return (
    <div className="mt-4">
      {link.startsWith("<div") ? 
        <>
          <div dangerouslySetInnerHTML={{ __html: link }} />   
        </>
        :
      <iframe src={yt0 ?? yt1 ?? yt2 ?? link} width={"100%"} height={height}></iframe>
      }
    </div>
  );
};

const check_for_share_youtube_link = (link : string) => {
  let ind = link.indexOf("youtu.be/")
  let id = ""
  if(ind == -1) return null
  let st = ind + 9 
  while(st < link.length){
    if (isAlphaNumeric(link[st])){
      id += link[st]
      st += 1
    }else{
      break
    }
  }
  
  return "https://www.youtube.com/embed/" + id
}
const check_for_normal_youtube_link = (link : string) => {
  let ind = link.indexOf("youtube.com/watch?v=")
  let id = ""
  if(ind == -1) return null
  let st = ind + 20 
  while(st < link.length){
    if (isAlphaNumeric(link[st])){
      id += link[st]
      st += 1
    }else{
      break
    }
  }
  return "https://www.youtube.com/embed/" + id
}
const check_for_embed_youtube_link = (link : string) => {
  let ind = link.indexOf("youtube.com/embed/")
  if(ind == -1) return null
  return link
}

function isAlphaNumeric(character : string) {
  return /^[a-zA-Z0-9]+$/.test(character);
}
export default matterPortEmbed;
