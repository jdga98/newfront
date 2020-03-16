import React, { Component } from 'react';
import axios from 'axios';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Category extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://kieroapi.net/parent/category')
        .then(response => {
            this.setState({
                posts: response.data.Resultados.filter(parent_id => parent_id.parent_id == null)                
            })

        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {posts} = this.state

        const list = posts.length ? (
            posts.map(post => {
                return (
                    <div>
                    <a className='clic-cate' href= {'https://kiero.co/complete-category?id-'+post.id+'-#'+ post.name}>
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
                    <h1>Categorías</h1>
                </div>
                <div className='cate-container'>
                   {list}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Category