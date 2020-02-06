import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
        },
        date: "04 Jun 2019",
        content: "Faala dev, Diego fake aqui fazendo um teste :)",
        comments: [
          {
            id: 1,
            author: {
              name: "Luan Nascimento",
              avatar: "https://avatars1.githubusercontent.com/u/44880379?v=4"
            },
            content: "Que coinscidência, tô aqui testando também ! kkkk"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Luan Nascimento",
          avatar: "https://avatars1.githubusercontent.com/u/44880379?v=4"
        },
        date: "05 Fev 2020",
        content:
          "Hey guys, I'm write something here just to complete the content!",
        comments: [
          {
            id: 2,
            author: {
              name: "Julio Alcantara",
              avatar: "https://avatars1.githubusercontent.com/u/44880379?v=4"
            },
            content: "Ok, I'm here for this too."
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            date: "04 Jun 2019",
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes"
          }
        ]
      },
      {
        id: 6,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/150?img=51"
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            date: "04 Jun 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          }
        ]
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="postlist">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
