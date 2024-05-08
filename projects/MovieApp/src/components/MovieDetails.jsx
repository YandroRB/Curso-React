import './MovieDetails.css'
import { URL_IAMGE_BACKDROP_SIZE_PREFIX, URL_IMAGE_PREFIX, URL_VIDEO_PREFIX } from '../../constant'
import { useMovieApi } from '../hooks/useMovieApi'

export function MovieDetails({movie,changeModalStatus}){
    const {title,overview,id,backdrop_path}=movie;
    const {data,renewData} = useMovieApi(URL_VIDEO_PREFIX(id));

    const getTrailer=()=>{
        const foundVideo= data.find(video =>{
            const {key,type }=video;
            return type === "Trailer"
        })
        if(foundVideo){
            const {key}=foundVideo
            return key;
        }
    }
    return (
        <div className="modal">
            <div className="modal-container">
                <div 
                style={{backgroundImage:`linear-gradient(to bottom, hsl(199, 72%, 63%,.6), hsl(200, 71%, 71%,.6), hsl(199, 70%, 78%,.6), hsl(200, 71%, 85%,.8), hsl(199, 72%, 92%)),url(${URL_IMAGE_PREFIX+URL_IAMGE_BACKDROP_SIZE_PREFIX+backdrop_path})`}}
                className="div container-description">
                    <h3>{title}</h3>
                    <p>{overview}</p>
                </div>
                <div className="container-video">
                    <iframe
                        width={560}
                        height={315}
                        src={`https://www.youtube.com/embed/${getTrailer()}`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                    />
                </div>
                <button onClick={changeModalStatus}>×</button>
            </div>
        </div>
    )
}