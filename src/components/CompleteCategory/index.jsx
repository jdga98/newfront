import React, { Component } from 'react';
import axios from 'axios';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class CompleteCategory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            titl: null
        }
    }

    componentDidMount() {
        var idParent = urlShow();
        const idproduct = window.location.href;
        const countid = idproduct.lastIndexOf('#')
        const titleCate = idproduct.substring((countid + 1), (countid + 200));
        
        var SampleText = titleCate.toString();
       
        var NewText = SampleText.replace(/-/g, " ");
       
         NewText = NewText.replace(/%/g, " "); 
         NewText = NewText.replace(/20/g, " "); 
         NewText = NewText.replace(/ C3 A1/g, "á");
         NewText = NewText.replace(/ C3 A9/g, "é");
         NewText = NewText.replace(/ C3 AD/g, "í");
         NewText = NewText.replace(/ C3 B3/g, "ó");
         NewText = NewText.replace(/ C3 BA/g, "ú");
        this.setState({ titl : NewText});

        axios.get('https://kieroapi.net/parent/category')
        .then(response => {
            this.setState({
                posts: response.data.Resultados.filter(parent_id => parent_id.parent_id === parseInt(idParent)) 
            })

        })
        .catch(error => {
            console.log(error)
        })

        
    function urlShow() {
        var id2 = "";
        const idproduct = window.location.href;
        const countid = idproduct.indexOf("?id-");
        const id = idproduct.substring(countid + 4, countid + 4 + 10);
        if (id.includes("-")) {
          var countid2 = id.indexOf("-");
          id2 = id.substring(0, countid2);
        }
        return id2;
      }
    }

    render(){
        const {titl} = this.state;
        const {posts} = this.state;
        console.log(posts)
        

        const list = posts.length ? (
            posts.map(post => {
                return (
                    <div key={post.id}>
                    <a className='clic-cate' href= {'https://listado.kiero.co/listcategory/?id-'+post.id+'/#'+ post.name}>
                    <div className="div-category" key={post.Producto_id}>
                        <span className='title-parents'>{post.name}</span>
                    </div>
                    </a>
                    </div>
                )
            })
        ) : (
                <div className="products"></div>
            )


        return(
            <div>
                <Header />
                <div className='title-category'>
                    <h1>{titl}</h1>
                </div>
                <div className='cate-container'>
                   {list}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CompleteCategory