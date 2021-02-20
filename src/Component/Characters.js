import React from 'react'
import SingleCharacter from "./SingleCharacter";
import Spinner from "./Spinner";


const Characters = ({ loading, items }) => {

    const obj = {
      birthday: "Unknown",
      char_id: 39,
      img:
        "https://th.bing.com/th/id/R217569b2ea46bbe6338b1b66f6ac1bb4?rik=bLh4ZBduiB%2f7aA&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20130808022011%2fbreakingbad%2fimages%2fb%2fb8%2fHolly.png&ehk=pgAey7fiDlGf3l9n2dIPXFsc7no5j0HDHjKF1iLimDk%3d&risl=&pid=ImgRaw",
      name: "Holly White",
      nickname: "Holly",
      portrayed: "Unknown",
      status: "Alive",
    };

    return loading ? (
      <Spinner/>
    ) : (
      <section className='cards'>
        {items.map((item) => (
          <SingleCharacter
            item={item.char_id === 39 ? obj : item}
            key={item.char_id === 39 ? obj.char_id : item.char_id}
          ></SingleCharacter>
        ))}
      </section>
    );
}

export default Characters
