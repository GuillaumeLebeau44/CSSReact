import CreateCard from "./component/CreateCard";
import "./styles/_card.scss";


function App() {

  return (
    <>
    {Cards.map((cards) => 
      {
        return (
        <div className="Create-card" key={cards.id}>
          <CreateCard AlbumDate={cards.AlbumDate} AlbumName={cards.AlbumName} AlbumPic={cards.AlbumPic} AlbumArtist={cards.AlbumArtist}/>
          
        </div>
        )
      }
    )} 
    </>
  )
}

export default App

const Cards = [
  {
    id: 1,
    AlbumPic: "https://upload.wikimedia.org/wikipedia/en/f/fe/Post_Malone_-_Austin.png",
    AlbumName: "AUSTIN",
    AlbumDate: "2023",
    AlbumArtist: "Post Malone",
  },
  {
    id: 2,
    AlbumPic: "https://upload.wikimedia.org/wikipedia/en/3/3f/Jungle_-_Volcano.png",
    AlbumName: "Volcano",
    AlbumDate: "2023",
    AlbumArtist: "Jungle",
  },
  {
    id: 3,
    AlbumPic: "https://upload.wikimedia.org/wikipedia/en/4/49/Sum41chuck.jpg",
    AlbumName: "Chuck",
    AlbumDate: "2004",
    AlbumArtist: "Sum41",
  },
  {
    id: 4,
    AlbumPic: "https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png",
    AlbumName: "The Slow Rush",
    AlbumDate: "2020",
    AlbumArtist: "Tame Impala",
  },
  {
    id: 5,
    AlbumPic: "https://upload.wikimedia.org/wikipedia/en/e/ed/Green_Day_-_American_Idiot_album_cover.png",
    AlbumName: "American Idiot",
    AlbumDate: "2004",
    AlbumArtist: "Green Day",
  },
  {
    id: 6,
    AlbumPic: "https://gamingaudionews.files.wordpress.com/2021/06/road-96-soundtrack.jpg?w=505",
    AlbumName: "Road 96 (Original Game Soundtrack)",
    AlbumDate: "2021",
    AlbumArtist: "Various Artists",
  },
  {
    id: 7,
    AlbumPic: "https://upload.wikimedia.org/wikipedia/en/f/f3/Trench_Twenty_One_Pilots.png",
    AlbumName: "Trench",
    AlbumDate: "2018",
    AlbumArtist: "21 Pilots",
  },
  {
    id: 8,
    AlbumPic: "https://upload.wikimedia.org/wikipedia/en/4/4f/Cleopatra_album_cover.jpg",
    AlbumName: "Cleopatra",
    AlbumDate: "2016",
    AlbumArtist: "The Lumineers",
  },
]