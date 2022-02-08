import React from 'react'

export default function SoundCloud() {
    return (
        <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1373396518&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" frameBorder="0" title="SoundCloud" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displaySoundCloud = () => {
    <SoundCloud> </SoundCloud>
}
