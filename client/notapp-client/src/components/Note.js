import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Redirect,
  useParams
} from "react-router-dom";
function Note() {
  let { id, id2, id3 } = useParams();
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [url, setUrl] = useState(null);
  const [uyari, setUyari] = useState("");

  useEffect(() => {
    axios.get('/notes/' + id3).then((response) => {
      setNote(response.data);
      setTitle(response.data.noteTitle);
      setContent(response.data.noteContent);
      setUrl(response.data.noteUrl);
    }).catch(error => {
      console.log(error);
    });
  }, [uyari]);

  function titleHandler(title) {
    setTitle(title);
  }


  function contentHandler(content) {
    setContent(content);
  }

  function urlHandler(content) {
    setUrl(content);
  }

  function addNote() {
    if (title.length > 0) {
      axios.post('/notes/', {
        noteId: id3,
        noteTitle: title,
        noteContent: content,
        noteDate: new Date(),
        noteCategoryId: id2,
        noteUrl: url
      })
        .then(function (response) {
          console.log(response);
          setUyari("Başarıyla Eklendi " + new Date());
          alert("Başarıyla Eklendi");
        })
        .catch(function (error) {
          console.log(error);
          setUyari(error);
          alert(error);
        });
    }
    else {
      alert("Çok kısa");
    }
  }

  function deleteNote() {
    axios.delete('/notes/' + id3)
      .then(function (response) {
        console.log(response);
        setUyari("Başarıyla Silindi " + new Date());
        alert("Başarıyla Silindi" + new Date());
      })
      .catch(function (error) {
        console.log(error);
        setUyari(error);
        alert(error);
      });
  }
  return (
    <div className="container">
      {note != null && note != "" ? <div>
        <h1 className='text-center'>{note.noteTitle}</h1>
        <div style={{ textAlign: 'center' }}>
          <img src={note.noteUrl} style={{ width: '25%' }}></img>
        </div>
        <br />
        <pre style={{ fontSize: '24pt', fontFamily: 'Times New Roman', textAlign: 'justify', overflow: 'revert-layer'}}>{note.noteContent}</pre>
        <i style={{ float: 'right' }}>{note.noteDate.substr(0, 10)}</i>
        <br />
        <i style={{ float: 'right' }}>{note.noteDate.substr(11, 8)}</i>

        <div className='row'>
          <div className='col-lg-12' style={{marginBottom: 500}}>
            <h2>Update Note</h2>

            <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">Title</span>
              <input onChange={(e) => titleHandler(e.target.value)} type="text" value={title} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <div className="form-group input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">Content</span>
              <textarea onChange={(e) => contentHandler(e.target.value)} value={content} className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
            </div>

            <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">URL</span>
              <input onChange={(e) => urlHandler(e.target.value)} type="text" value={url} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
              <button onClick={() => addNote()} className='btn btn-primary'>Add</button>
            </div>

            <i>{uyari}</i>
            <br/>

            <button onClick={()=>deleteNote()} className="btn btn-danger">Delete Note</button>

          </div>
        </div>

      </div> : <p> No Data...</p>}
    </div>
  )
}

export default Note