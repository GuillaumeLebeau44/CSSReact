import BasicRating from "./BasicRating";


const CreateCard = ({AlbumPic, AlbumName, AlbumDate, AlbumArtist}) => {

    return (
        <div className="album-card">
            <img className="album-pic" src={AlbumPic}></img>
            <div className="album-info">
                <p>{AlbumName}</p>
                <p>{AlbumArtist}</p>
                <p>{AlbumDate}</p>
            </div>
            <div className="album-rating">
                <p>Rate this album <BasicRating/></p>
            </div>            
        </div>
    )

}

export default CreateCard;