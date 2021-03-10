const SongComponent = (props) => {

    return (
        <div className="text-center">
            <h1> My Favorit song</h1>
            <h2>{props.song.artist}</h2>
            <h2><a href={props.song.youtube}>{props.song.title}</a></h2>
            <h3>{props.song.genre}</h3>
            <h3>{props.song.year}</h3>
            <h3>{props.song.youtube}</h3>
        </div>
    )

}

export default SongComponent;