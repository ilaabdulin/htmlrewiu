import axios from 'axios';
import React, {Component} from 'react';

export default class Editor extends Component {
    constructor() {
        super();
        this.currentPage = 'index.html'
        this.state = {
            pageList: [],
            newPageName: ""
        }
        this.createNewPage = this.createNewPage.bind(this);
    }

    componentDidMount() {
        this.loadPageList();
    }

    init(page) {
        this.frame = document.querySelector('iframe')
    }

    loadPageList() {
        axios
            .get("./api")
            .then(res => this.setState({pageList: res.data}))
    }

    createNewPage() {
        axios
            .post("./api/createNewPage.php", {"name": this.state.newPageName})
            .then(this.loadPageList())
            .catch(() => alert("Страница уже существует!"));
    }

    deletePage(page) {
        axios
            .post("./api/deletePage.php", {"name": page})
            .then(this.loadPageList())
            .catch(() => alert("Страницы не существует!"));
    }

    render() {
        // const {pageList} = this.state;
        // const pages = pageList.map((page, i) => {
        //     return (
        //         <h1 key={i}>{page}
        //             <a 
        //             href="#"
        //             onClick={() => this.deletePage(page)}>(x)</a>
        //         </h1>
        //     )
        // });

        return (
            <iframe src = '../index.html' frameBorder='0'></iframe>
            // <>
            //     <input
            //         onChange={(e) => {this.setState({newPageName: e.target.value})}} 
            //         type="text"/>
            //     <button onClick={this.createNewPage}>Создать страницу</button>
            //     {pages}
            // </>
        )
    }
}

// import React, {Component} from 'react';
// import axios from 'axios';

// export default class Editor extends Component {
//     constructor() {
//         super()

//         this.state = {
//             pageList: [],
//             newPageName: ''
//         }
//         this.createNewPage = this.createNewPage.bind(this)
//     }

//     componentDidMount() {
//         this.loadPageList();
//     }

//     createNewPage() {
//         debugger;
//         axios 
//             .post('./api/createNewPage.php', {'name' : this.state.newPageName})
//             .then(res => console.log(res))
//     }

//     loadPageList() {
//         axios
//             .get("./api")
//             .then(res => this.setState({pageList: res.data}))
//     }
//     render() {
//         const {pageList} = this.state;
//         const pages = pageList.map((page, i) => {
//             return (
//                 <h1 key = {i}>{page}</h1>
//             )
//         });
//         return (
//             <>
//                 <input 
//                     type='text'
//                     onChange={e => {this.setState({
//                         newPageName: e.target.value
//                     })}}/>
//                 <button onClick = {this.creatNewPage}>напавив</button>
//                 {pages}
//             </>
//         )
//     }
// }