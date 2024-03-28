"use client"

const matterPortEmbed = ({ link, height }: any) => {
    return (
        <div className="mt-4">
            <iframe src={link} width={'100%'} height={height}></iframe>
        </div>
    )
}

export default matterPortEmbed
