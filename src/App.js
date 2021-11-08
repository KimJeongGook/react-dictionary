// import logo from './logo.svg';
// import './App.css';
// import Person from "./Person";

// function App() {
//   return (
//     <div className="App">
//       <Person country="Korea" name="syleemomo" age="3"></Person>
//     </div>
//   );
// }


// import logo from './logo.svg';
// import './App.css';
// import Todo from "./Todo";

// function App() {
//   return (
//     <div className="App">
//       <Todo user="syleemomo" name="cleaning" done={false} description="cleaning my room on weekends"></Todo>
//     </div>
//   );
// }


// import logo from './logo.svg';
// import './App.css';
// import Book from "./Book";
// function App() {
//   const book = {
//     title: "영진직업전문학교",
//     author: "영진",
//     summary: "빅데이터 과정",
//     genre: "개발자",
//     release: "2021.10.28", 
//     ISBN: 20211018
//   }

//   return (
//     <div className="App">
//       <Book 
//         title={book.title}
//         author={book.author}
//         summary={book.summary} 
//         genre={book.genre}
//         release={book.release} 
//         ISBN={book.ISBN}></Book>
//     </div>
//   )
// }
// export default App;

// import logo from './logo.svg';
// import './App.css';
// import Book from "./NameTag";
// import NameTag from './NameTag';

// function App() {
//   return (
//     <div className="App">
//       <NameTag></NameTag>
//     </div>
//     );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import Counter from './Counter';

// function App() {
//   return (
//     <div className="App">
//       <Counter></Counter>
//     </div>
//     );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import React, {Component} from 'react';
// import Counter from './Counter';

// class App extends Component {
//   state = {
//     name: 'parent'
//   }
//   changeName = () => {
//     this.setState({name: "parent changed"})
//   }
//   render(){
//     console.log('parent')
//     const{name} = this.state
//     return(
//       <div className="App">
//         <h1>{name}</h1>
//         <button type="button" onClick={this.changeName}>change name</button>
//         <Counter></Counter>
//       </div>
//     )
//   }
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import YoutubeVideo from './YoutubeVideo';

// function App() {
//     return (
//       <div className="App">
//         <YoutubeVideo videoId="1234567890"
//                       videoName="Christmas dance"
//                       videoLength="23765"
//                       videoDescription="it is dance video on christmas party"
//         ></YoutubeVideo>
//       </div>
//     );
// }

// export default App;

// import './App.css';
// import YoutubeVideo from './YoutubeVideo';
// import dummyData from './dummyData';

// function App() {
//     return (
//       <div className="App"> 
//       {/* //데이터 -> HTML 문서로 변경한 것 뿐 */}
//         {dummyData.map(d => { 
//           return(
//           <YoutubeVideo 
//             key={d.videoId}
//             videoId={d.videoId}
//             videoName={d.videoName}
//             videoLength={d.videoLength}
//             videoDescription={d.videoDescription}
//             videoAuthor={d.videoAuthor}
//           >
//             {/* 컨텐츠 삽입 */}
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/_nIC2MU-Cnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          
//             </YoutubeVideo>
//         )
//         }
//       )}
        
//       </div>
//     );
// }

// export default App;


// import './App.css';
// import React from "react";

// function App() {
//   const person = {
//     name: "syleemomo",
//     age: 3
//   }
//   const personPage = (
//     <>
//     <h1>{person.name}</h1>
//     <h2>{person.age}</h2>
//     </>
//   )
//   return (
//     <div className="App">
//       {/* <div>{person.name? "you name is nice !" : "name doesn't exist !"}
//            - {person.age}</div> */}
//       <div>{person.name && personPage}</div>
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     count: 0
//   }
//   showUI = (cnt) =>{
//     let ui = null;
//     switch(cnt){
//       case 0:
//         ui = <h1>Home</h1>
//         break;
//       case 1:
//         ui = <h1>About</h1>
//         break;
//       case 2:
//         ui = <h1>Detail</h1>
//         break;
//       case 3:
//         ui = <h1>NotFound</h1>
//         break;
//     }
//     return ui
//   }
//   increase = () => {
//     this.setState({count: this.state.count +1})
//   }
//   render(){
//     const{count} = this.state
//     const name = "syleemomo"
//     const head = ()=>(<h1>태크</h1>)
//     return(
//       <>
//       {this.showUI(count)}
//       { (
//         <><h1 className="center">해딩태크</h1>
//           <p name={head}>lorem {name} lorem lorem lorem lorem</p>
//         </>
//       ) }
//       <button type="button" onClick={this.increase}>카운팅</button>
//       </>
//     )
//   }
// }

// export default App;


// import './App.css';
// import React from "react";
// import words from "./kor_dic_db.json";

// // const App = ()=>{ }
// function App() {
//   const containerStyle = {
//     width: '75%',
//     columns: '1',
//     margin: '30px auto',
//     textAlign: 'center',
//   }
//   const itemStyle = {
//     textAlign: 'left',
//     width: '100%',
//     marginBottom: '10px',
//     marginLeft: '20px',
//     background: 'rgb(236, 233, 236)',
//     display: 'inline-block', 
//   }
  
//   return(
//     <div id="container" style={containerStyle}>
//       {/* 데이터 => HTML 템플릿 */}
//       {/* map : 데이터 순회  filter: 삭제, 검색 reduce  */}
//       <h1>국어대사전</h1>
//         <input id="search" type="text" value="" placeholder="단어를 검색하세요 ..."></input>
//         <input id="submit" type="submit" value="찾기"></input> 
//       <br></br><br></br>
//       <hr></hr>
//       <br></br>

//       {words.map(word => {
//         return(
//           <>
//           <div class="item" style={itemStyle}>
//             <div class="word"><a href = {word.r_link} target="_blank" rel="noreferrer">
//                 {word.r_word}</a>
//                 <sup>{word.r_seq? word.r_seq:""}</sup>
//                 {word.r_chi}
//                 {word.r_pos}
//             </div>
//             <p class="description">{word.r_des}
//                 <button type="button" class="btn btn-outline-dark">
//                     <a href = {word.r_link} target="_blank" rel="noreferrer">자세히 보기</a></button>
//             </p>  
//           </div>
//           </>
//         )
//       })}
//     </div>
//   )
// }

// export default App;


// import './App.css';
// import React, { Component } from "react";
// import Movie from './Movie';

// class App extends Component {
//   constructor(props){
//     console.log('constructor')
//     super(props)
//     this.state = {
//       // name: "chalrie"
//       loading: true,
//       movies: []
//     }
//   }
//   // //이벤트 핸들러 함수
//   // changeName = () => {
//   //   console.log(this)
//   //   this.setState({name: 'name changed'})
//   // }
//   //컴포넌트가 생성되었을때 호출이 됨
//   componentDidMount() {
//     console.log('mount')
//     //서버에서 데이터 가져오기
//     fetch('https://yts.mx/api/v2/list_movies.json')
//     .then( res => res.json())
//     .then( result => {
//       console.log(result)
//       const {data:{movies}}=result
//       this.setState({loading: false, movies})
//     })
//   }
//   //컴포넌트가 업데이트 되었을때 호출이 됨
//   componentDidUpdate() {
//     console.log('update')
//   }
//   //컴포넌트가 제거되었을때 호출이 됨
//   componentWillUnmount() {
//     console.log('unmount')
//   }

//   render() {
//     // console.log('render')
//     // const {name} = this.state
//     const {loading, movies} = this.state

//     const style = {
//         display:'flex',
//         flexWrap: 'wrap',
//         justifyContent:'center',
//         alignItems: 'center',
//         width: '60%',
//         margin: '100px auto',
//         textAlign:'center'
//     }
//     const loadingStyle ={
//         position:'absolute',
//         left:'50px',
//         top:'50%',
//         transform: 'translate(-50%, -50%)',
//         fontSize:'2rem'
//     }

//     if(loading){
//       return(
//         <div style={loadingStyle}>
//           <h1>Loading ...</h1>
//         </div>
//       )
//     }else{
//       return(
//         <div style={style}>
//           {/* 오픈 API 데이터 순회 => 컴포넌트로 변환 */}
//           {movies.map(movie => {
//             return(
//               <Movie 
//                 key={movie.id}
//                 title = {movie.title}
//                 genres={movie.genres}
//                 cover={movie.medium_cover_image}
//                 summary={movie.summary}>
//               </Movie>
//             )
//           })}
//         </div>
//       )
//     }

//     // return(
//     //   <div className="App">
//     //     <h1>{name}</h1>
//     //     <button onClick={this.changeName}>change name</button>
//     //   </div>
//     // )
//   }
// }

// export default App;


// import './App.css';
// import React, { Component } from "react";
// import words from "./kor_dic_db.json";

// // const App = ()=>{ }
// // function App() {
// class App extends Component {
//   render(){
//     const containerStyle = {
//       width: '75%',
//       columns: '1',
//       margin: '30px auto',
//       textAlign: 'center',
//     }
//     const itemStyle = {
//       textAlign: 'left',
//       width: '100%',
//       marginBottom: '10px',
//       marginLeft: '20px',
//       background: 'rgb(236, 233, 236)',
//       display: 'inline-block', 
//     }
    
//     return(
//       <div id="container" style={containerStyle}>
//         {/* 데이터 => HTML 템플릿 */}
//         {/* map : 데이터 순회  filter: 삭제, 검색 reduce  */}
//         <h1>국어대사전</h1>
//           <input id="search" type="text" value="" placeholder="단어를 검색하세요 ..."></input>
//           <input id="submit" type="submit" value="찾기"></input> 
//         <br></br><br></br>
//         <hr></hr>
//         <br></br>

//         {words.map(word => {
//           return(
//             <>
//             <div class="item" style={itemStyle}>
//               <div class="word"><a href = {word.r_link} target="_blank" rel="noreferrer">
//                   {word.r_word}</a>
//                   <sup>{word.r_seq? word.r_seq:""}</sup>
//                   {word.r_chi}
//                   {word.r_pos}
//               </div>
//               <p class="description">{word.r_des}
//                   <button type="button" class="btn btn-outline-dark">
//                       <a href = {word.r_link} target="_blank" rel="noreferrer">자세히 보기</a></button>
//               </p>  
//             </div>
//             </>
//           )
//         })}
//       </div>
//     )
// }

// export default App;


import './App.css';
import React, { Component } from "react";
import Dictionary from './Dictionary';

class App extends Component {
  constructor(props){
    console.log('constructor')
    super(props)
    this.state = {
      loading: true,
      words: []
    } 
  } 
  // //이벤트 핸들러 함수
  // changeName = () => {
  //   console.log(this)
  //   this.setState({name: 'name changed'})
  // }
  //컴포넌트가 생성되었을때 호출이 됨
  componentDidMount() {
    console.log('mount')
    const BASE_URL = 'https://dictionary-search-words.herokuapp.com/api/words'

    //서버에서 데이터 가져오기
    fetch(BASE_URL)
    .then( res => res.json())
    .then( result => {
      console.log(result)
      const {words}=result
      this.setState({loading: false, words})
    })
  }
  //컴포넌트가 업데이트 되었을때 호출이 됨
  componentDidUpdate() {
    console.log('update')
  }
  //컴포넌트가 제거되었을때 호출이 됨
  componentWillUnmount() {
    console.log('unmount')
  }

  render() {
    const {loading, words} = this.state

    const containerStyle = {
      width: '75%',
      columns: '1',
      margin: '30px auto',
      textAlign: 'center',
    }

    if(loading){
      return(
        <div>
          <h1>Loading ...</h1>
        </div>
      )
    }else{
      return(
        <div id="cntainero" style={containerStyle}>
            <h1>국어대사전</h1>
                <input id="search" type="text" placeholder="단어를 검색하세요 ..."></input>
                <input id="submit" type="submit" value="찾기"></input> 
                <br></br><br></br>
                <hr></hr>
                <br></br>
          
          {/* 오픈 API 데이터 순회 => 컴포넌트로 변환 */}
          {words.map(dictionary => {
            return(
              // r_word, r_link, r_seq, r_chi, r_pos, r_des

              <Dictionary 
                key={dictionary._id}
                r_word = {dictionary.r_word}
                r_link={dictionary.r_link}
                r_seq={dictionary.r_seq}
                r_chi={dictionary.r_chi}
                r_pos={dictionary.r_pos}
                r_des={dictionary.r_des}
                >
              </Dictionary>
            )
          })}
        </div>
      )
    }
  }
}

export default App;
