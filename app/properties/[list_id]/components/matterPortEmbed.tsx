"use client";

const matterPortEmbed = ({ link, height }: any) => {
  const yt1 = check_for_share_youtube_link(link) 
  const yt2 = check_for_normal_youtube_link(link) 
  return (
    <div className="mt-4">
      {link.startsWith("<div") ? 
        <>
          <div dangerouslySetInnerHTML={{ __html: link }} />   
        </>
        :
      <iframe src={yt1 ?? yt2 ?? link} width={"100%"} height={height}></iframe>
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
    if (link[st] == "?"){
      break
    }
    id += link[st]
    st += 1
  }
  
  return "https://www.youtube.com/embed/" + id
}
const check_for_normal_youtube_link = (link : string) => {
  let ind = link.indexOf("youtube.com/watch?v=")
  let id = ""
  if(ind == -1) return null
  let st = ind + 20 
  while(st < link.length){
    if (link[st] == "?"){
      break
    }
    id += link[st]
    st += 1
  }
  return "https://www.youtube.com/embed/" + id
}

export default matterPortEmbed;
