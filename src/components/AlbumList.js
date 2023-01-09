import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  let albumData = albums.map(eachAlbum => 
    <AlbumCard
        name={eachAlbum.name}
        image={eachAlbum.image}
        genre={eachAlbum.genre}
      />
  )

  return (
    <section className="albums">
      {albumData}
    </section>
  );
}

export default AlbumList;
