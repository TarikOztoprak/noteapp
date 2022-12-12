import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  useParams,
  Route
} from "react-router-dom";

function Categories() {
  let { id } = useParams();
  const [categories, setCategories] = useState(null);
  const [title, setTitle] = useState(null);
  const [type, setType] = useState("blog");
  const [uyari, setUyari] = useState('');
  useEffect(() => {
    axios.get("/categories/").then((response) => {
      setCategories(response.data);
    });
  }, [uyari]);

  function titleHandler(title) {
    setTitle(title);
  }

  function typeHandler(title) {
    setType(title);
  }

  function addTitle() {
    if (title.length > 0) {
      axios.post('/categories', {
        categoryName: title,
        categoryFolderId: id,
        categoryType: type
      })
        .then(function (response) {
          console.log(response);
          setUyari("Başarıyla Eklendi" + new Date());
          alert("Başarıyla Eklendi" + new Date());
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
      <h1 className='text-center'>Categories</h1>
      <div className='row'>
        <div className='col-lg-6'>
          <h2>Create New Category</h2>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">NAME</span>
            <input onChange={(e) => titleHandler(e.target.value)} type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            <select onChange={(e) => typeHandler(e.target.value)} name="type" id="type">
              <option value="blog">Blog</option>
              <option value="gallery">Gallery</option>
            </select>
            <button onClick={() => addTitle()} className='btn btn-primary'>Add</button>
          </div>

        </div>
        <div className='col-lg-6'>
          {uyari}
        </div>
      </div>
      <br />
      <div className='row'>
        {
          categories != null ?
            categories.map((category) => (
              category.categoryFolderId == id ? <div className='col-3'>
                <div style={{ height: 100, backgroundColor: '#44ff88', textAlign: 'center', borderRadius: 15, lineHeight: '100px' }}>
                  <Link style={{ color: '#000000', textDecoration: 'none', fontSize: '32pt' }} key={category.categoryId} to={"/folders/" + id + "/categories/" + category.categoryId}>
                    {category.categoryName}
                  </Link>
                </div>
              </div> : <></>
            )) : <div>No Data</div>
        }
      </div>
    </div>
  )
}

export default Categories