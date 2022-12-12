import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  useParams,
  Link
} from "react-router-dom";

function Notes() {
  let { id, id2 } = useParams();
  const [notes, setNotes] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [url, setUrl] = useState(null);
  const [category, setCategory] = useState('blog');
  const [uyari, setUyari] = useState('');
  const [gizle, setGizle] = useState(true);
  useEffect(() => {
    axios.get("/notes/").then((response) => {
      setNotes(response.data.reverse());
    });

    axios.get('/categories/' + id2).then((response) => {
      setCategory(response.data);
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
      axios.post('/notes', {
        noteTitle: title,
        noteContent: content,
        noteDate: new Date(),
        noteCategoryId: id2,
        noteUrl: url
      })
        .then(function (response) {
          console.log(response);
          setUyari('Başarıyla eklendi : ' + new Date());
          alert("Başarıyla Eklendi " + new Date());
          setUrl('');
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

  return (
    <div className="container">
      <h1 className='text-center'>Notes</h1>
      <div className='row'>
        {
        gizle === true ?
          <div className='col-lg-6'>
            <h2>Create New Note</h2>
            <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">Title</span>
              <input onChange={(e) => titleHandler(e.target.value)} type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <br />
            <div className="form-group input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">Content</span>
              <textarea onChange={(e) => contentHandler(e.target.value)} value={content} className="form-control" id="exampleFormControlTextarea1" rows="18"></textarea>
            </div>
            <br />
            <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">URL</span>
              <input onChange={(e) => urlHandler(e.target.value)} value={url} type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
              <button onClick={() => addNote()} className='btn btn-primary'>Add</button>
            </div>
            <br />
            <button className='btn btn-secondary' onClick={()=>{setGizle(false);}}>Gizle</button>
            <i>{uyari}</i>
          </div> : <></>
        }

        <div className={gizle === true ? 'col-sm-6' : 'col-sm-12'}>
          <div className='row'>
            {
              notes != null && category.categoryType === "blog" ?
                notes.map((note) => (
                  note.noteCategoryId == id2 ? <div className={gizle === true ? 'col-sm-6' : 'col-sm-3'}>
                    <div style={{ height: 100, width: '100%', backgroundColor: '#44ff88', borderRadius: 15, lineHeight: '100px', textAlign: 'center', marginTop: 10 }}>
                      <Link style={{ color: '#000000', textDecoration: 'none', fontSize: '32pt' }} key={note.noteId} to={"/folders/" + id + "/categories/" + id2 + "/notes/" + note.noteId}>
                        {note.noteTitle}
                      </Link>
                    </div>
                  </div> : <></>
                )) : <></>
            }
            <span className='col-sm-6 text-center'>
              {
                notes != null && category.categoryType === "gallery" ?
                  notes.map((note) => (
                    note.noteCategoryId == id2 && note.noteId % 2 == 0 ?
                      <Link style={{ color: '#000000', textDecoration: 'none', fontSize: '32pt' }} key={note.noteId} to={"/folders/" + id + "/categories/" + id2 + "/notes/" + note.noteId}>
                        <img className='mb-1' src={note.noteUrl} style={{ width: '100%', objectFit: 'cover' }}></img>
                      </Link> : <></>
                  )) : <></>
              }
            </span>
            <span className='col-sm-6 text-center'>
              {
                notes != null && category.categoryType === "gallery" ?
                  notes.map((note) => (
                    note.noteCategoryId == id2 && note.noteId % 2 == 1 ?
                      <Link style={{ color: '#000000', textDecoration: 'none', fontSize: '32pt' }} key={note.noteId} to={"/folders/" + id + "/categories/" + id2 + "/notes/" + note.noteId}>
                        <img className='mb-1' src={note.noteUrl} style={{ width: '100%', objectFit: 'cover' }}></img>
                      </Link> : <></>
                  )) : <></>
              }
            </span>
          </div>
        </div>
      </div>




    </div>

  )
}


export default Notes