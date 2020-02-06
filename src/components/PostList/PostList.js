import React, { Component } from "react";
import "./style.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Luan Nascimento",
          avatar: ""
        },
        date: "05 Fev 2020",
        content:
          "Hey guys, I'm write something here just to complete the content!",
        comments: [
          {
            id: 2,
            author: {
              name: "Julio Alcantara",
              avatar: ""
            },
            content: "Ok, I'm here for this too."
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="post-content">
        <h4></h4>
      </div>
    );
  }
}

export default PostList;
