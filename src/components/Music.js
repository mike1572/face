
import React from 'react'



//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

//type: 'song', 
let videoId=  '0zM3nApSvMg'
let playlistId= 'RDAMVMkvoO5hwsYQo'
let name= 'ne deve ne kush'
let artist=  ['Bob', 'Mart']
let album= [{Ki: 'ke'}]
let duration=  159000
let thumbnails = [Array]
let params = 'wAEB'

/*
type: 'video', videoId: 'sixP2AyFOjY', playlistId: 'RDAMVMsixP2AyFOjY', name: 'Büyük Ev Ablukada - Ne 
Deve Ne Kush (Mutsuz Parti Şekli)', author: 'Mustafa TAŞ', 
views: '993 views', duration: 12000, thumbnails: [Array], params: 'wAEB'
src="https://www.youtube.com/embed/2SnbMTQwDKM?rel=0" 
*/
const test = 'wLIMPrlP2mE'

let Music = (props) => {

    return (
        <Card sx={{ maxWidth: 545, maxHeight: 600, alignItems: 'center', mx: 'auto', mt: 5, fontSize: 13}} raised >
       
            <CardMedia
                component={'iframe'}
                height='100%'
                src={`https://www.youtube.com/embed/` + test + `?rel=0?fs=0`}
                style={{position: 'relative', minHeight: 330 }}
                alt="Youtube Music Player" 
            
            />
        </Card>
    )
}

export default Music;