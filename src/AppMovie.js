import './App.css';
import React, { Component } from "react";
import Movie from './Movie';

class AppMovie extends Component {
  constructor(props){
    console.log('constructor')
    super(props)
    this.state = {
      // name: "chalrie"
      loading: true,
      movies: []
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
    //서버에서 데이터 가져오기
    fetch('https://yts.mx/api/v2/list_movies.json')
    .then( res => res.json())
    .then( result => {
      console.log(result)
      const {data:{movies}}=result
      this.setState({loading: false, movies})
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
    // console.log('render')
    // const {name} = this.state
    const {loading, movies} = this.state

    const style = {
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems: 'center',
        width: '60%',
        margin: '100px auto',
        textAlign:'center'
    }
    const loadingStyle ={
        position:'absolute',
        left:'50px',
        top:'50%',
        transform: 'translate(-50%, -50%)',
        fontSize:'2rem'
    }

    if(loading){
      return(
        <div style={loadingStyle}>
          <h1>Loading ...</h1>
        </div>
      )
    }else{
      return(
        <div style={style}>
          {/* 오픈 API 데이터 순회 => 컴포넌트로 변환 */}
          {movies.map(movie => {
            return(
              <Movie 
                key={movie.id}
                title = {movie.title}
                genres={movie.genres}
                cover={movie.medium_cover_image}
                summary={movie.summary}>
              </Movie>
            )
          })}
        </div>
      )
    }

    // return(
    //   <div className="App">
    //     <h1>{name}</h1>
    //     <button onClick={this.changeName}>change name</button>
    //   </div>
    // )
  }
}

export default AppMovie;